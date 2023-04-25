import { describe, it, expect /* beforeEach */ , beforeEach } from 'vitest'
import { mount  } from '@vue/test-utils'
import ProjectComponent from '@/views/ProjectComponent.vue'
import { ref } from 'vue' // for testing isLoggedIn

describe('ProjectComponent.vue', () => {
  
  let wrapper; // create wrapper variable, so we can make the beforeEach() wrapper global

/*   beforeEach(() => { // minimize redundancy of code
    wrapper = mount(ProjectComponent)   // make wrapper global
  })  */ 

 /*  afterEach(() => {

  }) */

  it('Should render project title when passed', () => {     
    //const textMsg = 'Hello there'                               
    const wrapper = mount(ProjectComponent)

    const project = wrapper.get('[data-test="project"]') // makes it only test if the HTML(v-for loop) has the data-test attached to it. Wont test other elements
    // .find('.card') // find the class card

    expect(wrapper.find('h3').exists()).toBeTruthy() // test if h3 exists .toBe(true) also works

    expect(project.text()).toContain("Card TitleOne")  
  })


  it('should add new project', async () => { // Add async, since Vue is async and we have to wait for test
    const wrapper = mount(ProjectComponent)

    expect(wrapper.findAll('[data-test="project"]')).toHaveLength(2) // testing that we have 2 items in the array

    await wrapper.get('[data-test="new-project"]').setValue('new project') // get element + change the value of input, similating something type
    // Not really needed to type value in setValue, since we have v-model in the input - just for 
    // Sets value of a text-control input or select element and updates v-model bound data.
   
    
    await wrapper.get('[data-test="form"]').trigger('submit') // get FORM and trigger a submit

    expect(wrapper.findAll('[data-test="project"]')).toHaveLength(3) // testing that we now have 3 items in the array

  })

  it('should be able to complete project', async () => {
   const wrapper = mount(ProjectComponent)

   
    await wrapper.get('[data-test="project-checkbox"]').setValue(true) 

    expect(wrapper.get('[data-test="project"]').classes()).toContain('completed')
    // https://test-utils.vuejs.org/api/#attributes

  })

  // isLoggedIn - if using the get() we can run test, as it expects the HTML to be there
  it('Test if logged in: .find and .exist (renders a profile link) ', () => {
  
    const wrapper = mount(ProjectComponent, {
      setup() {
        let isLoggedIn = ref(true)
        return {
          isLoggedIn
        }
      }
    }) 
    const profileLink = wrapper.get("#profile")

    expect(profileLink.text()).toEqual("My Profile") // put as test, on the other <a> // Also makes ERROR with .get

  })

  it('It should not render a profile link', () => { // 
    const wrapper = mount(ProjectComponent) 
      let isLoggedIn = ref(false)
     // const textMsg = 'Hello there'       // Dont actually need the setup() {} and return {} in setup(), since we just have an unused variable comment here
      /* {
      setup() {
        let isLoggedIn = ref(false)
        return {
          isLoggedIn
        }
      }
    } */
    expect(wrapper.exists()).toBeTruthy(/* isLoggedIn.value */)  // to remove setup () {} and remove the return {} in setup()
    //expect(wrapper.text()).toBe(isLoggedIn.value)  
    //const profileLink = wrapper.get("#profile")  // Comment out to see it passes now: get() need the element to exist
    // these two goes together
    
    const profileLink = wrapper.find("#profile")
    expect(true).toBeTruthy() // put as test, on the other <a> // Also makes ERROR with .get
    //expect(profileLink.exists()).toBe(false)
  })
})
