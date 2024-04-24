import {v2 as cloudinary} from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'developjose',
    api_key: '797625468962648',
    api_secret: 'XrMHs4smFlykmzsa7SUk0pFS2-A',
    secure: true,
});

describe('Pruebas en fileUpload', () => {
    test('Debe de subir el archivo correctamente a cloudinary', async() => {
        const imgUrl = 'https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-landscape-jpg-wallpapers-free-download-image_2573540.jpg';
        const resp = await fetch( imgUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        })
        console.log(cloudResp);



    })

    test('debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null)
    })
});