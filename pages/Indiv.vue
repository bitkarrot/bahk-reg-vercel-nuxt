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
              <h2>Individual Membership Application</h2>
              </center>
              <br/>
                <p>
                To sign up, simply fill out the application form below.
                The individual membership fee for 2021 is set at <b>0.0013 BTC</b>
                and will be revised once per year.  We will send you an email 
                with a confirmation usually within 48h. If you have questions, 
                please drop us an email: info[at]bitcoin.org.hk
                </p>

          </b-container>
          <b-form v-if="show" @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Enter name"
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
                placeholder="输入中文名称 (chinese name, if any)"
              />
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Email address:"
              label-for="input-3"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-3"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              />
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Telegram Username for Member chat:"
              label-for="input-4"
            >
              <label
                class="sr-only"
                for="inline-form-input-telegram"
              >Telegram Username</label>
              <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                  id="inline-form-input-telegram"
                  v-model="form.telegram"
                  placeholder="Telegram"
                />
              </b-input-group>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Keybase Username (for Member and p2p trade room):"
              label-for="input-4"
            >
              <label
                class="sr-only"
                for="inline-form-input-keybase"
              >Keybase Username</label>
              <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                  id="inline-form-input-keybase"
                  v-model="form.keybase"
                  placeholder="Keybase"
                />
              </b-input-group>
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
              v-slot="{ ariaDescribedby }"
              label="Are you closely related to Hong Kong and willing to be physically present at our annual general meetings?"
            >
              <b-form-radio-group
                v-model="form.physical"
                required
                :options="options"
                :state="state"
                name="radio-validation-2"
                plain
                stacked
                :aria="ariaDescribedby"
              />
            </b-form-group>

            <p> <b> Clicking on Submit will send you to a BTCPay Payment Request Page.</b></p>

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
      options: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' }
      ],
      form: {
        email: '',
        chinese: '',
        name: '',
        publish: '',
        physical: '',
        telegram: '',
        keybase: '',
        type: 'individual'
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
      //alert(JSON.stringify(this.form))
      
      const btcpaylink = await axios.post('/api/indivapp', this.form).then(
        function (response) {
          // Handle success
          return response.data
        }
      )
      if (btcpaylink.length > 0) {
        window.location.href = btcpaylink // external redirect
      } else {
        this.$router.push('/Error') // error page - internal redirect only
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.chinese = ''
      this.form.publish = ''
      this.form.physical = ''
      this.form.telegram = ''
      this.form.keybase = ''
      this.form.type = 'individual'
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
