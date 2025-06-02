import React, { useEffect, useState } from 'react'



const ToggleTheme = () => {

    return (
        <input type="checkbox" checked={theme = "dark"} onChange={setTheme} />
    )
}


export default ToggleTheme