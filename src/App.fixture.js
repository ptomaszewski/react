import App from './App';

export default {
  component: App,
  props: {
    test: 'teścik',
    handleClick: () => alert('Klikam')
  }
};
