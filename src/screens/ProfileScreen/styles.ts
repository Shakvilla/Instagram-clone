import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    padding: 10,
    flex: 1,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },

  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
    color: colors.black,
  },
  name: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  buttonsRoot: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 4,
  },
  gallery: {
    flex: 1,
    // aspectRatio: 1,
  },
  galleryImage: {
    flex: 1,
    padding: 1,
    aspectRatio: 1,
    // maxWidth: '50%',
  },
});
