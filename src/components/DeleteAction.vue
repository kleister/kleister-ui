<template>
  <fwb-a
    v-if="tag === 'a'"
    href="#"
    class="pl-3"
    @click="showModal"
    @click.shift.prevent="confirmDelete"
  >
    <font-awesome-icon :icon="['fas', 'trash']" class="pr-1" />
    {{ title }}
  </fwb-a>
  <fwb-button
    v-if="tag === 'button'"
    href="#"
    class="ml-3"
    @click="showModal"
    @click.shift.prevent="confirmDelete"
  >
    <font-awesome-icon :icon="['fas', 'trash']" class="pr-1" />
    {{ title }}
  </fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Delete</div>
    </template>
    <template #body>
      <p
        class="text-base text-left leading-relaxed text-gray-500 dark:text-gray-400"
      >
        Are you sure you want to delete <code>{{ element }}</code
        >?
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Cancel
        </fwb-button>
        <fwb-button @click="confirmDelete" color="red"> Confirm </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<script setup>
import { FwbA, FwbButton, FwbModal } from "flowbite-vue";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Delete",
  },
  tag: {
    type: String,
    default: "a",
  },
  element: {
    type: String,
    default: "example",
  },
  handler: {
    type: Function,
    default: () => {},
  },
});

const isShowModal = ref(false);

function confirmDelete() {
  props.handler();
  isShowModal.value = false;
}

function closeModal() {
  isShowModal.value = false;
}

function showModal() {
  isShowModal.value = true;
}
</script>
