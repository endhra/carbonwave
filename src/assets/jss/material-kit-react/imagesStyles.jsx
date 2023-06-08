const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "150px !important"
  },
  imgRoundedBorder: {
    position: "absolute",
    top: "-3px",
    left: "12px",
    width: "105%",
    height: "105%",
    zIndex: "100",
    background: "transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAC/VBMVEUAAAABnq8Dn68FoLANorIRpLNjwsZAs7wSpLMPoLA9srsUo7IQo7JpxslOu8JwycwInq4oqLQCnq8En7BvycsGoLBsycxsxsgJobAQo7JrxshwysxvycsFn7BvycsGoLBryMsFn7BsyMsGoLAWprRmxclmxchbur9rxcgGoLABnq8Cnq9syMsCnq8Po7IKoLAFn7ATpLMboK4Ana5vycsCnq9wyctMu8IysrwBnq8XprRryMs1srxuyMttxskKobEXprRwycsGoLADnq80srxfwsduycsCnq8iq7dvyctuyMtwycsGoLBsx8o9tb4MorFRvcNox8pryMpkxMggqrdTvsQaqLVuyMtkwsZwyswNo7JvycttxchewsdLu8Fwycs+tb4aqLUiq7cIobBVv8QHoLBJusFVv8QZqLVrx8okq7hQvMNixMgnr7poxslJusEcqLVXv8UCnq8zsbwVpbQdqbZcwsYqrrkQpLJuyctbwcZtyMtNu8NWv8U0sbtFuMA0srxnxck+tr8TpbM4s70HoLBZwMURpLNvysxkxMhmxclewsZNvMIaqLUxsrxRvcM3rbc5tL1dwsYiq7cDn689tb5gw8cNorJEuMATpbMmrblvyctHucElrLglrrkZp7VTvsMvsbxcwcZCt79SvcQysbsnrbhPvMNsyMo+tb9FuMBWv8RewsckrLhMu8I/pa5ytLY9tb5Lkplus7YUpbNFuMBmys0nrLhzvsBwycttyMpvycsBnq9rx8oHoLAKobFkxMhpxskPo7Jhw8ddwsYaqLUeqbZSvcNVvsQWprQTpbNYwMVmxchWv8Ujq7cxsLslrLgYp7RbwcZMu8JIusFBt780srxOvMJKusFFuMBDuMA2s7xoxskur7ohqrcLorE8tb44s70sr7pnxck/tr8ysbsqrrkprbknrbhawMUcqLZqx8lQvMNgw8cUpbRewsc+tb46tL0gqrc7tL1HucARpLMEn7Blxchmx8tnxcgOo7JvyMpwzM4psr0Mo7J9xmikAAAAuXRSTlMA/f7+/v4IBAYfAhUQFw3reRrxzaadQjwqJh7izq6ckod+ZVxINiYaEeXfu4+DamJBNQv6+fjz2NPSqF5eUEz499raxb27q6R1c2xZVkgxLyT5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') no-repeat"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      "inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  },
  imgSmallCentered: {
    display: "block",
    maxWidth: "150px",
    margin: "0 auto"
  },
};

export default imagesStyles;
