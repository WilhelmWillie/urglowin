import { useContext, useRef, useState } from "react";
import styled from "styled-components";

import { AppStore } from "../stores";

import Modal from "./Modal";
import Button from "./Button";
import { Form, TextInput, Label, FormSection } from "./style";
import useUser from "../hooks/useUser";
import { useUpdateUserCB } from "../hooks/useUpdateUser";

const EditProfileModal = () => {
  const appState = useContext(AppStore);
  const { state: { showEditProfileModal }, dispatch } = appState;

  const user = useUser();
  const updateUser = useUpdateUserCB();

  const formRef = useRef(null);

  const [error, setError] = useState(null);

  const closeModal = () => {
    dispatch({ type: 'TOGGLE_EDIT_PROFILE_MODAL' });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formRef.current) {
      const formElement = formRef.current;

      const formData = {
        username: formElement.username.value,
        skinDescription: formElement.skinDescription.value,
        favProduct: formElement.favProduct.value,
        favIngredient: formElement.favIngredient.value,
      }

      // Try to save profile
      const res = await fetch("/api/user/edit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (res.status === 200) {
        await updateUser();
        closeModal();
      } else {
        const errorData = await res.json();
        setError("An error occurred")
      }
    }
  }

  return (
    <Modal showModal={showEditProfileModal} closeModal={closeModal} maxWidth={600}>
        <h1>Edit Profile</h1>

        {!user?.hasSetupProfile && (
          <p>Looks like you haven't set up your profile yet! Claim a username and fill out some profile details to get started on URGLOWIN ✨</p>
        )}

        <Form ref={formRef} onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormSection>
            <Label for="username">Your username</Label> 
            <TextInput id="username" name="username" placeholder="username" maxlength="20" defaultValue={user?.username} />
          </FormSection>

          <FormSection>
            <Label for="skinDescription">My skin is...</Label>
            <TextInput id="skinDescription" name="skinDescription" placeholder="oily and smooth" maxlength="140" defaultValue={user?.bio?.skinDescription} />
          </FormSection>

          <FormSection>
            <Label for="favProduct">My favorite product right now is...</Label>
            <TextInput id="favProduct" name="favProduct" placeholder="hand soap" maxlength="140" defaultValue={user?.bio?.favProduct} />
          </FormSection>

          <FormSection>
            <Label for="favIngredient">The ingredient that I like the most in my products is</Label>
            <TextInput id="favIngredient" name="favIngredient" placeholder="water" maxlength="140" defaultValue={user?.bio?.favIngredient} />
          </FormSection>

          <SaveButton type="submit">Save</SaveButton>
        </Form>
    </Modal>
  );
}

const SaveButton = styled(Button)`
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default EditProfileModal;