import adapter from '@sveltejs/adapter-auto';

const config = { kit: { 
    adapter: adapter(), 
    alias: {
        'assets': "src/assets",
        'components': "src/lib/components"
    }
} };

export default config;
