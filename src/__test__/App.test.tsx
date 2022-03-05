

//for dummy navigation
export const CreateTestProps = (props: Object) => ({
  navigation: {
    addListener: jest.fn(),
    closeDrawer: jest.fn(),
    dismiss: jest.fn(),
    dispatch: jest.fn(),
    getParam: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    setParams: jest.fn(),
    state: {params: {}},
    toggleDrawer: jest.fn(),
  },
  ...props,
});

describe('resolve test', () => {
  it('initial render',()=>{
   expect(2 + 2).toBe(4);
  })
 });