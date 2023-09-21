import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'MyLabel',
    tags: ['autodocs'],
    component: MyLabel,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: 'inline-radio'
        },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Baic label'
    }
}
export const AllCaps: Story = {
    args: {
        label: 'AllCap label',
        allCaps: true
    }
}
export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-primary'
    }
}
export const CustomColor: Story = {
    args: {
        label: 'CustomColor label',
        fontColor: '#dddfaa'
    }
}
