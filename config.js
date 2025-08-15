var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Yol Yapım Ajandası  / The Road Making Agenda',
    subtitle: ' ',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.885, 41.001],
                zoom:12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/N2rvXBTw/MEF-AAP-027-BAP-2025-08-03-10-07-08.png',
            description: '',
            location: {
                center: [28.885, 41.001],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/BHvckd83/MEF-AAP-027-BAP-2025-08-03-10-07-59.png',
            description: '',
            location: {
                center: [28.924, 41.029],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/d0j1D4Dt/MEF-AAP-027-BAP-2025-08-03-10-08-47.png',
            description: '',
            location: {
                center: [28.936, 41.020],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/3yDBdX6t/MEF-AAP-027-BAP-2025-08-03-10-10-07.png',
            description: '',
            location: {
                center: [28.943, 41.015],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'six-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/XkN96cSw/MEF-AAP-027-BAP-2025-08-03-10-11-04.png',
            description: '',
            location: {
                center: [28.945, 41.011],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    }
       
       
    ]
};
