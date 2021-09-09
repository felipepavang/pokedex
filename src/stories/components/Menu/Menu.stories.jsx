import React from 'react'
import Menu from '../../../components/Menu'

export default {
  title: 'Header/Menu',
  component: Menu,
  argTypes: {
    links: {
      name: 'Links do Menu'
    }
  }
}

const Template = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {
  links: ['Home', 'Description']
}