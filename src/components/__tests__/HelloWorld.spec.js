import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {  // Tests block (we can group multiple test within the describe(). it() is a singular testBlock)
  it('renders properly', () => { // it() is representation a testBlock - What we test on: could be to see if a text-string exist or data type etc
    // first argument is just text that gets written out with a passed test (in CLI) + Logic lives inside our functionArrow(callback)
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    // Our Compoment we want to test on, in this case we call HomeView with shallowMount()
    // wrapper is object that contains multiple different properties and methods, that is going to be related to the specific component we test on(homeView)
    // We can use wrapper to access the component instance, and we can use that to access the data property
    
    expect(wrapper.text()).toContain('Hello Vitest') 
    // assertion: We are expecting(testing) on the specific thing we want: grabbing wrapper, then matching the two strings. If they are the same, test: pass
    // We use expect() to test on something, and we use toContain() to test if a string exist in a string
  })
})

// 1

import WelcomeItem from '../WelcomeItem.vue'

describe('WelcomeItem.vue', () => {
  
  it('renders textMsg when passed', () => {     
    const textMsg = 'Hello there'                               
    const wrapper = mount(WelcomeItem, {    
      
    })
    expect(wrapper.text()).toMatch(textMsg)  
  })
})