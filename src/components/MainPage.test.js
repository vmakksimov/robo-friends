import { shallow } from "enzyme";
import MainPage from "./MainPage";
import React from "react";


let wrapper;
beforeEach(() => {
    let mockProps = {
        onRequestRobots : jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    let wrapper2;
    let mockProps2 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filteredRobots()).toEqual([])
    expect(wrapper2.instance().filteredRobots()).toEqual([])
})

