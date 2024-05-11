<template>
  <div>
    The Time in LA is: 
    {{ displayTime }}
  </div>
  <div>
    <p>Message is: {{ message }}</p>
	
    <Vueform v-bind="vueform" />
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import { Vueform, useVueform } from '@vueform/vueform';

const props = defineProps({
  timeZone: {
    type: String,
    default: 'America/Los_Angeles',
  }
});

const currentDateTime = ref(new Date());
const displayTime = computed(() =>
  currentDateTime.value.toLocaleString('en-US', {
    timeZone: props.timeZone,
  })
);

setInterval(() => {
  currentDateTime.value = new Date();
});

export default {
  mixins: [Vueform],
  setup(props, context)
  {
    const form = useVueform(props, context)

    const vueform = ref({
      size: 'md',
      displayErrors: true,
      addClass: 'vf-create-account',
      schema: {
        container: {
          type: 'group',
          schema: {
            first_name: {
              type: 'text',
              placeholder: 'First name',
              columns: {
                label: 12,
                wrapper: 12,
              },
              fieldName: 'First name',
              rules: [
                'required',
                'max:255',
              ],
            },
          },
          description: 'Make sure it matches your legal name',
        },
      },
    })

    return {
      ...form,
      vueform,
    }
  }
}
</script>