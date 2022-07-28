<template>
	<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f9d71c;">
  <div class="container-fluid">
		&nbsp; &nbsp;
		<router-link to="/" class="navbar-brand">
			<img src="../assets/img/logo.png" alt="" width="50" class="d-inline-block align-text-top">
		</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">
						<span style="color:#105e26;">Vue 정복</span>
					</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todo">투두리스트</router-link>
        </li>
				<li class="nav-item">
          <router-link class="nav-link" to="/s">일정관리</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            궁금하지?
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">비밀1</a></li>
            <li><a class="dropdown-item" href="#">비밀2</a></li>
						<li><a class="dropdown-item" href="#">비밀3</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">대왕비밀</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>

export default {
	name: 'NavBar'
}
</script>

<style scoped>
*{
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: 500;
	}
</style>