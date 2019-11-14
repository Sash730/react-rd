import React from "react";
import Loader from 'react-loader-spinner';

export function Istream() {
    let isLoading = true;

    return (
            <div style={{marginTop: "70px"}}>
                {isLoading ?
                    <div>
                        <Loader
                                type="MutatingDots"
                                color="#0E0A0F"
                                height={100}
                                width={100}
                        />
                    </div>
                : ""
            }
            </div>
    );
}