<template>
  <div>
<!--    <Nav /> -->
    <b-container
      id="contact"
      fluid
      bg-variant="primary"
      class="bg-light mh-100 px-0 text-grey"
    >
      <b-container fluid class="content py-3 mh-100">
        <b-container>
          <b-container fluid class="content py-3 mh-100">
            <center>
              <a href="https://bitcoin.org.hk">
               <b-img fluid src="https://www.bitcoin.org.hk/images/bahk-logo-big-white.svg" alt="Bitcoin HK" class="img" />
              </a>
              <h2>Individual Membership Application</h2></center>
          </b-container>
          <b-form v-if="show" @submit="onSubmit" @reset="onReset">

            <input type="hidden" name="type" value="individual">

            <b-button type="submit" variant="primary">
              Submit
            </b-button>
            <b-button type="reset" variant="danger">
              Reset
            </b-button>
          </b-form>
          <b-card class="mt-3" header="Your Form Data to be Submitted:">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-container>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  data () {
    return {
      form: {
        type: 'individual'
      },
      show: true
    }
  },
  methods: {
    async onSubmit (event) {
        event.preventDefault()
        await axios.post('/api/posttest', this.form).then(function (response) {
          // Handle success
          const link = response.data.message
          console.log("axios response", response.data)
            /*
          if (link.length > 0) {
            window.location.href = response.data.message
          } else {
            this.$router.push('/Error') // error page - internal redirect only
          }*/

          return response.data
        }
      )
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
