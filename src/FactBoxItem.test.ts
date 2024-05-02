import { expect, test } from "vitest";
import { mount } from '@vue/test-utils'
import FactBoxItem from "./FactBoxItem.vue";

test("should render a FactBoxItem", ()=>{
    const wrapper = mount(FactBoxItem, {
      props: {
        label: "Test",
        value: "Test",
      },
    })
  
    expect(wrapper.text()).toContain('Test')
})

test.each([
    {
        props: {
            label: "Test",
            value: "up",
            valueClass: "price-up",
        },
        expectedClass: ".price-up",
    },
    {
        props: {
            label: "Test",
            value: "down",
            valueClass: "price-down",
        },
        expectedClass: ".price-down",
    },
    {
        props: {
            label: "Test",
            value: "normal",
            valueClass: "price-normal",
        },
        expectedClass: ".price-normal",
    }
])("should render a FactBoxItem", ({props, expectedClass })=>{
    const wrapper = mount(FactBoxItem, {
      props
    })
  
    const element = wrapper.get(expectedClass)
    console.log("####",props.value, element.text())
    expect(props.value).equal(element.text())
})
