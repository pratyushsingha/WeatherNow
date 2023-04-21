import React from 'react'

function Footer(props) {
    return (
        <footer
            class="bg-white text-center lg:text-left fixed
         inset-x-0
         bottom-0">
            <div class="p-4 text-center text-neutral-700">
                © 2023 Copyright: 
                <a
                    class="text-neutral-800 hover:text-blue-800"
                    href="https://github.com/pratyushsingha/" target='_blank'
                > <strong>{props.name}</strong>
                </a
                >
            </div>
        </footer>
    )
}

export default Footer