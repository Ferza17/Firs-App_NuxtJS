<template>
    <div>
        <h1>A Single User, with ID: {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    validate (data) {
        console.log(data);
        // return data.params.id ==1;
        // Regex 
        return /^\d+$/.test(data.params.id);
    },
    layout: 'users'
}
</script>

