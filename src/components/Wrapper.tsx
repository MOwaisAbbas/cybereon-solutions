import React from "react"

type PropsType = {
    children: React.ReactNode
}

const Wrapper = ({ children }: PropsType) => {
    return (
        <div style={{ marginTop: '100px' }}>
            {children}
        </div>
    )
}

export default Wrapper