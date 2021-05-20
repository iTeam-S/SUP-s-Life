<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <simple-modal v-model="isShow" title="Information" class="modal-header">
            <template slot="success" class="modal-body">
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
  props : ["msg", "isShow"],
  data() {
    return { 
//showModal : false
    }
  }
}
</script> 