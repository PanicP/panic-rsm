import { useState, useEffect } from 'react'

function useImportImage(imagePath) {
    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => {
        import(imagePath).then((image) => {
            setImageSrc(image.default)
        })
    }, [imagePath])

    return imageSrc
}

export default useImportImage
