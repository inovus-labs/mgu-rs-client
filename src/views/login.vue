<template>
    <section class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div class="gradient-border bg-white rounded-xl shadow-2xl md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            <p class="text-3xl font-black">Sign in to your account</p>
          </h1>
          <form class="space-y-4 md:space-y-6 pr-7" @submit.prevent="handleSubmit" style="width: 400px; margin: 0 auto;">
            <div>
              <label for="email" class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input v-model="rememberMe" id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">Forgot password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            <!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Don't have an account yet? <a href="#" class="font-medium text-purple-600 hover:underline dark:text-purple-400">Sign up</a>
            </p> -->
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
      const rememberMe = ref(false)
  
      const handleSubmit = () => {
        console.log('Email:', email.value)
        console.log('Password:', password.value)
        console.log('Remember Me:', rememberMe.value)
      }
  
      return {
        email,
        password,
        rememberMe,
        handleSubmit
      }
    }
  }
  </script>
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .gradient-border {
    background: linear-gradient(120deg, #e0c3fc, #8ec5fc, #e0c3fc);
    background-size: 200% 200%;
    animation: gradient 5s ease infinite;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  </style>