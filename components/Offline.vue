<template>
  <b-jumbotron id="about" bg-variant="white" class="rounded-0 mb-0">
    <b-row>
      <b-col
        md="4"
        order-md="2"
        class="d-flex align-items-center justify-content-center"
      >
        <b-img fluid src="https://www.bitcoin.org.hk/images/bahk-logo-big-white.svg" alt="John Doe" class="img" />
      </b-col>

      <b-col md="8" order-md="1">
        <b-container>
          <h2 class="display-4">
            Error!
          </h2>

          <p class="lead">
            It looks like our payment server is offline.
            If the error continues, please contact our staff at
            info [at] bitcoin.org.hk
          </p>
        </b-container>
      </b-col>
    </b-row>
  </b-jumbotron>
</template>

<style scoped>
.img {
  max-height: 300px;
}
</style>
