import { StyleSheet } from 'aphrodite/no-important';

export const styles = StyleSheet.create({
  headerWrapper:{
    backgroundColor:'#AAAAAA',
    height: '80px',
  },
  linksWrapper:{
    display: 'flex',
    height: '100%',
    width: '65%',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media screen and (max-width: 1145px)': {
      width: '100%',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      justifyContent: 'unset',
      marginLeft: '10px',
    }
  },
  link:{
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'normal',
    padding: '14px',
    ':hover': {
      fontWeight: '900',
    },
  },
  logo:{
    height: '58px',
  }
});

export const activeLink = {
  fontWeight: '900',
};
