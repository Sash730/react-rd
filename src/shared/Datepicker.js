import React from 'react';
import subMonths from 'date-fns/subMonths';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { SingleDatePicker } from 'react-dates';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-demo.css";

export function DatePickerDemo(props) {
    console.log("startDate", props);

    return (
            <>
            <DatePicker
                dateFormat="MMM d, yyyy"
                minDate={subMonths(new Date(), 3)}
                maxDate={new Date()}
                selected={props.startDate}
                onChange={date => props.onChange(date)}
            />
                <span className="oi oi-calendar input-icon" title="icon name" aria-hidden="true">
                </span>
            </>
        );
    // let state = {
    //     date: null,
    //     focused: null
    // };
    // const setState = (payload) => {
    //     console.log("payload", payload);
    //     state = {...state, ...payload};
    //     console.log("payload state", state);
    // };
    // const handleDateChange = (date) => {
    //     console.log("date changed");
    // };
    //
    // return (
    //
    //         <SingleDatePicker
    //             small={true}
    //             id="1425434"
    //             numberOfMonths={1}
    //             date={state.date}
    //             onDateChange={date => handleDateChange(date)}
    //             hideKeyboardShortcutsPanel={true}
    //             focused={state.focused}
    //             onFocusChange={({ focused }) =>
    //                 setState({ focused })
    //             }
    //             showDefaultInputIcon
    //         />
    // );
}