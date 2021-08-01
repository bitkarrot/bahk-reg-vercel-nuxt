<template>
  <b-container
    id="contact"
    fluid
    bg-variant="primary"
    class="bg-primary mh-100 px-0 text-white"
  >
    <b-container fluid class="content py-3 mh-100">
      <b-container>
        <h3 class="mb-4">
          Contact Me
        </h3>

        <p>
          You know I am busy teaching people lessons, so reach me through my
          sidekick <del>Cecile</del> <ins>Zeke</ins>.
        </p>

        <hr class="bg-white">

        <b-row>
          <b-col md="7" class="mb-5 mb-md-0 py-3">
            <b-form v-if="show" @submit="onSubmit" @reset="onReset">
              <b-form-group>
                <b-form-input
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  type="email"
                  name="_replyto"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />
              </b-form-group>

              <b-form-group>
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  rows="3"
                  name="message"
                  placeholder="Message"
                  required
                />
              </b-form-group>

              <b-button
                type="submit"
                class="bg-white btn d-flex align-items-center text-dark"
              >
                SEND
              </b-button>
            </b-form>
          </b-col>

          <b-col md="3" offset-md="1">
            <b-list-group class="mb-5">
              <b-list-group-item
                v-for="(item, index) in contact"
                :key="index"
                class="
                  bg-transparent
                  border-left-0 border-right-0 border-top-0
                  px-0
                "
              >
                <div>
                  <p class="font-weight-bold mb-2 text-uppercase">
                    {{ item.label }}
                  </p>

                  <small>{{ item.content }}</small>
                </div>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        message: '',
        name: ''
      },
      contact: [
        {
          label: 'Telephone',
          content: '(12) 345-6789'
        },
        {
          label: 'Email',
          content: 'king[at]welston.com'
        },
        {
          label: 'Address',
          content: '2021 Black Speech Bubble, ID'
        }
      ]
    }
  },
  computed: {
    state () {
      return Boolean(this.value)
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
