<template>
    <div class="container">
      <div class="card">
        <div class="card-header"><h4 class="m-0">Let's get in touch!</h4></div>
        <div class="card-body">
          <form v-if="!isSubmitted">
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                  <label for="firstname">First Name : </label>
                  <input
                      type="text"
                      id="firstname"
                      class="form-control"
                      v-model="contactData.firstName">
                </div>

                <div class="form-group">
                  <label for="firstname">Last Name : </label>
                  <input
                      type="text"
                      id="lasttname"
                      class="form-control"
                      v-model="contactData.lastName">
                </div>

                <div class="form-group">
                  <label for="email">E-mail</label>
                  <input
                      type="email"
                      id="email"
                      class="form-control is-valid"
                      v-model="contactData.email">
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="message">Message</label><br>
                <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                <textarea
                    id="message"
                    rows="5"
                    class="form-control"
                    v-model="contactData.message"
                    placeholder="Enter your message."></textarea>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button
                    class="btn btn-primary"
                    @click.prevent="submitted()">Submit!
                </button>
              </div>
            </div>
          </form>
          <div v-else class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="panel panel-default">
                <div class="panel-body text-center">
                  <h4>Thank's for your message, i'll get in touch with you as soon as possible.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import { db } from '../firebaseDb'
export default {
  data() {
    return {
      contactData: {
        email: "",
        firstName: "",
        lastName: "",
        message: "",
      },

      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      db.collection('contact').add(this.contactData)
        .then(() => {
          this.contactData.email = ''
          this.contactData.firstName= ''
          this.contactData.lastName= ''
          this.contactData.message= ''
          this.isSubmitted = true;
        })
      .catch((e) => {
        console.log('Error submitting contact form:', e)
      })

    }
  }
};
</script>

<style scoped>
.row {
  justify-content: center;
}
</style>
