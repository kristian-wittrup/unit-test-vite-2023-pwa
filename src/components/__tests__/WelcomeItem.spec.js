import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import WelcomeItem from '../WelcomeItem.vue'

describe('WelcomeItem.vue', () => {
  
  it('renders textMsg when passed', () => {     
    const textMsg = 'Hello there'                               
    const wrapper = mount(WelcomeItem, {    
      
    })
    expect(wrapper.text()).toMatch(textMsg)  
  })
})

// 2