import { mount } from '@vue/test-utils'
import EventCard  from '@/components/EventCard'

describe('EventCard', () =>{
    it('render the data successfully', () =>{
        const event = {
            "category": "animal welfare",
            "title": "ewqewq",
            "description": "rr",
            "location": "qqq",
            "pets": 1,
            "id": "cae2c938-8d71-4d64-a991-1ac24e7b7fbb",
            "extras": {
                "catering": false,
                "music": false
            },
            "organizer": "Nam Nguyen",
            "date": "Fri Sep 03 2021",
            "time": "10:7"
        }
        const wrapper = mount(EventCard, {props : {event}})
        const wrapperHtml = wrapper.html()
        console.log(wrapperHtml)
        expect(wrapperHtml).toContain(event.time)
        expect(wrapperHtml).toContain(event.title)
    })
})