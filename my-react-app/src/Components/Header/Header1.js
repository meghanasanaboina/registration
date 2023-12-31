import React from "react";
import { Link } from "react-router-dom";

export const Header1 = () => {
    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/cart">User Details</Link>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}