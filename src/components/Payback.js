import React, { useState } from "react";
import { DatePickerDemo } from "../shared/Datepicker";
import Loader from 'react-loader-spinner';

export function Payback() {
    let isLoading = true;
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
        <div style={{paddingTop: "70px"}} className="container">
            <DatePickerDemo startDate={startDate}
                            onChange={(date) => setStartDate(date)}
            />
        </div>
        <div>{isLoading ?
            <Loader
                type="MutatingDots"
                color="#0E0A0F"
                height={100}
                width={100}
            />
            : ""
        }
        </div>
            </>
    );
}
