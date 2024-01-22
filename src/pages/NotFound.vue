<template>
        <div class="error-container">
            <h1 class="error-code">404</h1>
            <p class="error-message">Oops! The page you're looking for could not be found.</p>
            <a href="/" class="back-home-link">Back to Home</a>
        </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style lang="scss" scoped>
 body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .error-container {
            text-align: center;
        }

        .error-code {
            font-size: 120px;
            color: #e74c3c;
            margin: 0;
        }

        .error-message {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .back-home-link {
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
            border: 2px solid #3498db;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }

        .back-home-link:hover {
            background-color: #3498db;
            color: #fff;
        }
</style>