import { useState } from "react"

export function useImageLogo() {
    const [imageUrl, setImageUrl] = useState()
    setImageUrl('C:/Users/Nico/Desktop/Logo.png')

    return { imageUrl: {imageUrl}}
}