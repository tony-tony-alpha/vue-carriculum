<template>
    <form @submit.prevent="onSubmit" class="user-form">
        <div>
            <label>Username</label>
            <input type="text" v-model="username" placeholder="Name" />
            <p class="error">{{ usernameErrorMessage }}</p>
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Password" />
            <p class="error">{{ passwordErrorMessage }}</p>
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
            <p class="error">{{ confirmPasswordErrorMessage }}</p>
        </div>
        <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required("Username is required").min(3, "Username must be at least 3 characters long").test(
        'unique',
        'Username is already taken',
        function (value) {
            // const response = await fetch(`https://api.example.com/users?username=${value}`);
            // const data = await response.json();
            // return data.name != value
            return true
        }
    ),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().test(
        'match',
        'Passwords do not match',
        function (value) {
            return this.parent.password === value;
        }
    )
})

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: schema,
})
const { value: username, errorMessage: usernameErrorMessage } = useField<string>('username');
const { value: password, errorMessage: passwordErrorMessage } = useField<string>('password');
const { value: confirmPassword, errorMessage: confirmPasswordErrorMessage } = useField<string>('confirmPassword');

const onSubmit = handleSubmit(values => {
    console.log("register with",values);
});

const isFormValid = computed(() => {
    return !usernameErrorMessage.value && !passwordErrorMessage.value && !confirmPasswordErrorMessage.value;
})
</script>

<style scoped></style>

