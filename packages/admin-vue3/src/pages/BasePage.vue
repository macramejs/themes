<template>
    <layout>
        <template v-slot:sidebar="{ sidebar }">
            <ul>
                <li>
                    <a href="">Link 1</a>
                </li>
                <li>
                    <a href="">Link 1</a>
                </li>
            </ul>
            <button @click="sidebar.toggle()">Toggle Secondary Sidebar</button>
        </template>
        <template v-slot:header>
            <div class="flex items-center h-full space-x-2">
                <div>Posts</div>
                <div id="portal-header-left"></div>
            </div>
            <div class="flex items-center space-x-2">
                <button
                    class="
                        flex
                        items-center
                        justify-center
                        w-4
                        h-4
                        text-gray-600
                        border border-gray-600
                        rounded-full
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="w-2 h-2 fill-current"
                    >
                        ../layouts/default/Layout.vue d="M315.1 452.9c0
                        32.6-26.5 59.1-59.1 59.1s-59.1-26.5-59.1-59.1 26.5-59.1
                        59.1-59.1 59.1 26.5 59.1 59.1zm0-196.9c0 32.6-26.5
                        59.1-59.1 59.1s-59.1-26.5-59.1-59.1 26.5-59.1 59.1-59.1
                        59.1 26.5 59.1 59.1zm0-196.9c0 32.6-26.5 59.1-59.1
                        59.1s-59.1-26.5-59.1-59.1S223.4 0 256 0s59.1 26.5 59.1
                        59.1z" fill-rule="evenodd" clip-rule="evenodd" />
                    </svg>
                </button>

                <ui-button sm> Save </ui-button>
            </div>
        </template>
        <template v-slot:header-secondary>
            <div>Posts / Foo / Bar</div>
            <div class="flex items-center space-x-8">
                <div class="flex items-center space-x-2">
                    <button
                        class="
                            flex
                            items-center
                            h-6
                            px-2
                            text-gray-700
                            bg-transparent
                            rounded-xs
                            hover:bg-gray-200
                        "
                        @click="setIsOpen(!isOpen.value)"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            class="w-3 h-3 mr-1 fill-current"
                        >
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path
                                d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4h18zM6.404 6L11 12.894V20h2v-7.106L17.596 6H6.404z"
                            />
                        </svg>
                        Filter
                    </button>
                    <ui-sidebar :open="isOpen" @close="setIsOpen">
                        <div class="px-4 mt-2">
                            <p class="text-sm text-gray-500">
                                Your payment has been successfully submitted.
                                We’ve sent your an email with all of the details
                                of your order.
                            </p>
                        </div>
                    </ui-sidebar>
                    <button
                        class="
                            flex
                            items-center
                            h-6
                            px-2
                            text-gray-700
                            bg-transparent
                            rounded-xs
                            hover:bg-gray-200
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            class="w-3 h-3 mr-1 fill-current"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z"
                            />
                        </svg>
                        Show as Grid
                    </button>
                </div>
                <div class="flex space-x-2 h-7">
                    <button
                        class="uppercase hover:font-semibold secondary-active"
                    >
                        en
                    </button>
                    <button class="uppercase hover:font-semibold">de</button>
                </div>
            </div>
        </template>
        <template v-slot:sidebar-secondary>Nested crud</template>
        <template v-slot:default>
            <div class="p-6" v-if="isMounted">
                <component
                    v-for="(component, index) in components"
                    v-bind="component.props"
                    :is="component.name"
                    :key="index"
                />
            </div>
        </template>
    </layout>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, onMounted } from 'vue';
import { Component } from '@macramejs/macrame';
import Layout from '../layouts/default/DefaultLayout.vue';

export default defineComponent({
    components: { Layout },
    name: 'BasePage',
    props: {
        components: {
            required: true,
            type: Array as PropType<Component[]>,
        },
    },
    setup() {
        let isOpen = ref<boolean>(false);
        let isMounted = ref<boolean>(false);

        onMounted(() => {
            isMounted.value = true;
        });

        return {
            isMounted,
            isOpen,
            setIsOpen(value) {
                isOpen.value = value;
            },
        };
    },
});
</script>

<style>
.secondary-active {
    box-shadow: inset 0px -2px 0px #4951f2;
}
</style>
