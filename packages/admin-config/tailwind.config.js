module.exports = {
    // mode: 'jit',
    variants: {
        extend: {
            backgroundColor: ['active', 'odd'],
            textColor: ['active'],
        },
        padding: ['last'],
    },
    theme: {
        borderRadius: {
            full: '9999px',
            lg: '19px', // TODO:
            md: '15px',
            sm: '11px',
            xs: '6px',
        },
        colors: {
            white: 'white',
            blue: {
                100: '#EDF2FF',
                200: '#D4E0FF',
                300: '#ABC2FF',
                400: '#6489FF',
                500: '#4951F2',
                600: '#3038CA',
                700: '#252C9F',
                800: '#1E216D',
                900: '#0C122D',
                DEFAULT: '#4951F2',
            },
            gray: {
                100: '#F5F8FB',
                200: '#EEF2F7',
                300: '#E5EAEF',
                400: '#DAE1E8',
                500: '#CFD9E2',
                600: '#A6B5C5',
                700: '#6C8199',
                800: '#5A6776',
                900: '#404A56',
                DEFAULT: '#6C8199',
            },
            green: {
                100: '#E7FFF3',
                200: '#D0FFE9',
                300: '#A6FFD5',
                400: '#78FFBF',
                500: '#40FFA4',
                600: '#37CA85',
                700: '#238155',
                800: '#145436',
                900: '#0F4029',
                DEFAULT: '#78FFBF',
            },
            red: {
                100: '#FFE3E6',
                200: '#FFCACF',
                300: '#FFA9B1',
                400: '#FF8A96',
                500: '#D4002E',
                600: '#D4002E',
                700: '#7A001A',
                800: '#4E0011',
                900: '#3D000D',
                DEFAULT: '#FF8A96',
            },
            yellow: {
                100: '#FFF6D8',
                200: '#FFF0BD',
                300: '#FFE793',
                400: '#FFDC65',
                500: '#FFCB18',
                600: '#E6B818',
                700: '#A76F00',
                800: '#684500',
                900: '#513600',
                DEFAULT: '#FFDC65',
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        fontSize: {
            xs: ['10px', '17px'],
            sm: ['12px', '21px'],
            base: ['14px', '24px'],
            lg: ['16px', '24px'],
            xl: ['25px', '33px'],
        },
        boxShadow: {
            DEFAULT: '0px 0px 19px 0px rgba(0,0,0,0.08)',
            sm: '0px 2px 4px 0px rgba(0,0,0,0.05)',
        },
        extend: {
            gridTemplateColumns: {
                app: '300px 1fr',
            },
        },
    },
};
