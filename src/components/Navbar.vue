<template>
    <nav class="navbar" >
        <a href="#">Home</a>
        <a href="#">Movie</a>
        <a href="#">About</a>
    </nav>
</template>

<script>
    export default{
        name:'NavbarComponent',  
        //명명규칙에 따라 Nabvar한다음에 Component를 붙여준다. 안붙여주면 에러난다.
        // Component name "Navbar" should always be multi-word라고 뜸 'NavbarC'이렇게 해도 됨
    }
</script>

<style>
.navbar{
    background: #000;
    padding: 20px;
    text-align: center;
}

.navbar a {
    color: #fff;
    text-decoration: none;
    padding: 1em;
}
</style>


