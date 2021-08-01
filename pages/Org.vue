<template>
  <div>
    <Nav />
    <b-container
      id="contact"
      fluid
      bg-variant="primary"
      class="bg-light mh-100 px-0 text-grey"
    >
      <b-container fluid class="content py-3 mh-100">
        <b-container>
          <b-container fluid class="content py-3 mh-100">
            <center><h2>Corporate Membership Application</h2></center>
          </b-container>

          <b-form v-if="show" @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Your Organization Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.orgname"
                placeholder="Enter Organization name"
                required
              />
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="公司名:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.chinese"
                placeholder="输入中文名称 (chinese name, if available)"
              />
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Contact Person:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.name"
                placeholder="Enter name"
                required
              />
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Email address of Contact Person:"
              label-for="input-4"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              />
            </b-form-group>

            <b-form-group
              v-slot="{ ariaDescribedby }"
              label="Would you like your membership status to be published on our website?"
            >
              <b-form-radio-group
                v-model="form.publish"
                required
                :options="options"
                :state="state"
                name="radio-validation"
                plain
                stacked
                :aria="ariaDescribedby"
              />
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="If you would like to publish your membership status, please provide a link to your corporate logo:"
              label-for="input-5"
            >
              <b-form-input
                id="input-url"
                v-model="form.url"
                type="url"
                placeholder="Enter a url, http://..."
              />
            </b-form-group>
            <input type="hidden" name="type" value="organization">
            <b-button type="submit" variant="primary">
              Submit
            </b-button>
            <b-button type="reset" variant="danger">
              Reset
            </b-button>
          </b-form>
          <b-card class="mt-3" header="Your Data">
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
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' }
      ],
      form: {
        orgname: '',
        chinese: '',
        name: '',
        email: '',
        publish: '',
        url: '',
        type: 'organization'
      },
      show: true
    }
  },
  computed: {
    state () {
      return Boolean(this.value)
    }
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      // console.log(this.form)

      const btcpaylink = await axios.post('/sheets', this.form).then(
        function (response) {
          // Handle success
          return response.data
        }
      )
      //  console.log('server response: ', btcpaylink)

      if (btcpaylink.length > 0) {
        window.location.href = btcpaylink // external redirect
      } else {
        this.$router.push('/Error') // internal redirect only
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.orgname = ''
      this.form.chinese = ''
      this.form.name = ''
      this.form.email = ''
      this.form.publish = ''
      this.form.url = ''
      this.form.type = 'organization'
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
