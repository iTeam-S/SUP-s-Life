<template>
  <div class="modal-mask">*
    <div class="modal-wrapper">
      <div class="modal-container">
        <simple-modal  title="Modal Header" class="modal-header">
            <template  id="succes"  slot="success" class="modal-body">
                 <h3>{{ msg }}</h3>
                 <button @click="$emit('close')">OK</button>
            </template>
        </simple-modal>
      </div>
    </div>
  </div>
</template>
 
<script>
import SimpleModal from 'simple-modal-vue'
export default {
  name: 'SimpleModal',
  components : { SimpleModal },
  props : { msg : String },
  data() {
    return { 
      showModal : false
    }
  }
}
</script> 