var index = 0;
var w = window.innerWidth;
var h = window.innerHeight;
var thumbWidth = 1280 / 8;
var thumbHeight = 720 / 8;
var screenFactor = 1;
var thumbnails = ["_4_mAt4nexs.jpg", "_6HpI5i84w8.jpg", "_7mm_gpC_A0.jpg", "_AXx2XSI4Kw.jpg", "_hFarg-Obuc.jpg", "_NGQfFCFUn4.jpg", "_PUEb8ppPbg.jpg", "_Q7rcUm0Dro.jpg", "_sxUG8O6M2w.jpg", "_uwNDiU04zE.jpg", "_W8y2A9sK6s.jpg", "_ysomCGaZLw.jpg", "_yXEnhyOTQo.jpg", "_ZNF4NDCrTM.jpg", "_ZpLbriJXvM.jpg", "_zZ7fIkpBgs.jpg", "-3HjrdC0dAk.jpg", "-5q5mZbe3V8.jpg", "-ezfi6FQ8Ds.jpg", "-fxi9fqYx74.jpg", "-I0FjdwcSm0.jpg", "-Ih5UArd4zk.jpg", "-Ot0vHUyEpw.jpg", "-Y2Mi2iAVMY.jpg", "0-q1KafFCLU.jpg", "0BvDNk6Gml0.jpg", "0ir1qkPXPVM.jpg", "0OFwRdDeX4Y.jpg", "0QRTAwJoXuk.jpg", "0Rsa4U8mqkw.jpg", "0VgbMG503Ws.jpg", "0WOquS6DKl8.jpg", "0WVDKZJkGlY.jpg", "0XeYtTS4zJ8.jpg", "1d0Zf9sXlHk.jpg", "1LMz6hgQtBM.jpg", "1O6Qstncpnc.jpg", "1Q0SVnv_jwk.jpg", "1S1cXaqkIRQ.jpg", "1SIX0HTH-50.jpg", "1Th0h_nSTgU.jpg", "1V_03efSkg0.jpg", "1VIZ89FEjYI.jpg", "1zZZBB9-Nm8.jpg", "2dLE4Nn6-ug.jpg", "2EEABJp8g6g.jpg", "2EVFYstVuVk.jpg", "2F0gwsOzj40.jpg", "2f9TU-F214c.jpg", "2jYEz66J_J4.jpg", "2Jz18tj-mEM.jpg", "2L6gsn7rGqI.jpg", "2MI2XA-qgpk.jpg", "2rcKpY-4QBI.jpg", "2Wln8D4CgeY.jpg", "2XOFLRPnFC0.jpg", "2Zcz3Z0baVE.jpg", "3-lP1j6MvW4.jpg", "3bKwtJT769g.jpg", "3CxtK7-XtE0.jpg", "3cxtvDEziXU.jpg", "3d-6YanrbL4.jpg", "3gmCdjhhCN8.jpg", "3hK540tMmvw.jpg", "3mnSDifDSxQ.jpg", "3niVHCdB1wA.jpg", "3PGo7Hs1yfU.jpg", "3VTkBuxU4yk.jpg", "4CqwkiaXEOQ.jpg", "4czjS9h4Fpg.jpg", "4eKXwKDdXYA.jpg", "4fDnjA7GNtc.jpg", "4mGyYNuG6us.jpg", "4orZekvjmo8.jpg", "4pa9O5cr398.jpg", "4RtsXnvVIk8.jpg", "4TWR90KJl84.jpg", "4UFfD0HIhv4.jpg", "4xCRT_jTJg0.jpg", "5-8nwgHo-8g.jpg", "5aPe9Uy10n4.jpg", "5AwdkGKmZ0I.jpg", "5CCAMBT4WDw.jpg", "5D4vjndnB0w.jpg", "5Fg9oZk-5uA.jpg", "5floMLOMR8w.jpg", "5fP3C4hH3VU.jpg", "5h3sIRrQHJE.jpg", "5hKat4umL90.jpg", "05HuTGeF5AA.jpg", "5hzU10CbWy8.jpg", "5J7zE95UN_s.jpg", "5JvC6M2wXFU.jpg", "5S4bm3bAt9Y.jpg", "5UMgw3V-Q5I.jpg", "5V2B28OqfqM.jpg", "5wZzMyf6wLM.jpg", "5z8VwyGOuXg.jpg", "6di34z0eAaI.jpg", "6DiJaODKUmE.jpg", "6DO6OSq7T9c.jpg", "6eKE9pf01FY.jpg", "6NMvQU9xNbo.jpg", "6ZUPsl0EVuk.jpg", "7CY9S78Ekew.jpg", "7dC9_K0dz48.jpg", "7HV3m0nK0MM.jpg", "7jKze614bT0.jpg", "7oxlCKMlpZw.jpg", "7PBYGu4Az8s.jpg", "7pT5BxDLK9s.jpg", "7pynaH-PPCA.jpg", "7qrlCLbGigc.jpg", "7TBPrYJDoDE.jpg", "8BlQPORtSsQ.jpg", "8GNddMuwj8g.jpg", "8KWMwl-Qd0E.jpg", "8Mc6zZxBTLA.jpg", "8SMZGBfRO_Q.jpg", "8TsWkuWWXgc.jpg", "8XcC6OiVJTA.jpg", "9-65R77IfyM.jpg", "9BPMTr-NS9s.jpg", "9bqk6ZUsKyA.jpg", "9dEVHuVuDSc.jpg", "9e9D7ABgHpU.jpg", "9g9j2s13I2s.jpg", "9KLwOzhrRBw.jpg", "9KtFn1hCzNg.jpg", "9mBWZYKP2ro.jpg", "9P7P1lxwZms.jpg", "9pX76rbcqBM.jpg", "9qQ8FiP1GFM.jpg", "9rhadTURsrw.jpg", "9wvzFOcwI40.jpg", "9X_nbT89X-c.jpg", "9ZZzfrapNvo.jpg", "18-VtLh-6OA.jpg", "20WNckAJbXU.jpg", "26MgbYkiSoE.jpg", "28YwvwneKoY.jpg", "32I0Qso4sDg.jpg", "33OwLS1SiUo.jpg", "35_AHD1kecw.jpg", "36fCTB20uOA.jpg", "45eaXV6CJOk.jpg", "53vz5pQH0Rg.jpg", "56bUgtG8Gzg.jpg", "58hoktsqk_Q.jpg", "60g72d4Nqss.jpg", "62n2LWjMqiE.jpg", "65JrtwtTOdc.jpg", "66TYJJObd6E.jpg", "74bM5geGViM.jpg", "74ZSIJk2pcg.jpg", "91vECNhvmMY.jpg", "91VRyTvjoX4.jpg", "94JBhbeTiMI.jpg", "452iQ8ttIcc.jpg", "511SdWsvE5U.jpg", "579USFTA7Eo.jpg", "a0TkeUhcVrM.jpg", "A3CVHvCqouE.jpg", "A4PhxGDFAsU.jpg", "A5H8zBb3iao.jpg", "a6QT0acJFQE.jpg", "A8AKXdXl0o0.jpg", "aAgJernobg8.jpg", "ABTdTTnnEU8.jpg", "AGQxJmrzPGs.jpg", "aHzKJOC19SU.jpg", "AKJfakEsgy0.jpg", "alaen4fno20.jpg", "ap-BkkrRg-o.jpg", "ar6UiTbuoSU.jpg", "aS1no1myeTM.jpg", "aSqtj5AwMAQ.jpg", "asSzZdtJCuo.jpg", "aTS9n_m7TW0.jpg", "AuQ5sNSoqXc.jpg", "AV3P55Xu_Ow.jpg", "avgBgc210bg.jpg", "aXzVF3XeS8M.jpg", "ayXxwJJId_c.jpg", "AzswZ6Ntazk.jpg", "B2RyeLsz62c.jpg", "b5h4a_O5E44.jpg", "B6_iQvaIjXw.jpg", "b13xnFp_LJs.jpg", "B50m5J2jqIg.jpg", "bACX8BXHuEs.jpg", "BboMpayJomw.jpg", "Bbyftsl7Owo.jpg", "bc5Tg4HMgP4.jpg", "bdbEzhBFGTQ.jpg", "BFkh9SgyAMs.jpg", "BflFNMl_UWY.jpg", "bg3v8VKEtBc.jpg", "bGtR3l_JeUo.jpg", "Bhg-Gw953b0.jpg", "BHiWygziyso.jpg", "BInk1AoBHrY.jpg", "BIWzS_-WaPg.jpg", "bjnE0EWFSMM.jpg", "BMM4UIetbjw.jpg", "bn_p95HbHoQ.jpg", "bnChQbxLkkI.jpg", "BnK9oeBI9G4.jpg", "bNsjIYQB5gg.jpg", "bO8hS_W3BPE.jpg", "BoZ0Zwab6Oc.jpg", "BpdDN9d9Jio.jpg", "bpGUPI6O2ok.jpg", "bPiofmZGb8o.jpg", "br2l_vzmuDY.jpg", "BSS8Y-0hOlY.jpg", "bth7ViGGpeY.jpg", "BV2FdDmGiW0.jpg", "BVyTKCMZDNo.jpg", "bxd4M4UiUmE.jpg", "bY3_ej9rL1Y.jpg", "bZ12FX-m60w.jpg", "c_e-IC0VwZM.jpg", "C_x9J8qImoU.jpg", "C-icyHEb7W4.jpg", "C-qYgs_yOXA.jpg", "C1uZlcvlUoM.jpg", "c2u2PvD2iSs.jpg", "C9I-W1eTCbk.jpg", "C19IgOGkYGs.jpg", "C680oxL__ck.jpg", "CaAY-jAjm0w.jpg", "cbSMOjwoPAg.jpg", "cDTG6o1vC2I.jpg", "CEDIaGEOuEg.jpg", "CFPLIaMpGrY.jpg", "cfZA6udrVUc.jpg", "CgVwIiKHtvo.jpg", "ChZaqqoNg-0.jpg", "CiCT7NCP6BY.jpg", "cii6ruuycQA.jpg", "Ck604TT4hEg.jpg", "CkTVoLamPio.jpg", "CKZvWhCqx1s.jpg", "clMF5cGitOE.jpg", "CM4CkVFmTds.jpg", "cN3HAAOlMFs.jpg", "CN4fffh7gmk.jpg", "cnXapYkboRQ.jpg", "CQta9Hq28rI.jpg", "crP1orWqBpo.jpg", "cT7wOSOZVoc.jpg", "Cu5hhxP_prE.jpg", "CuyTC8FLICY.jpg", "D9t4APjK4jU.jpg", "d56cdV8yZNQ.jpg", "dBiMxJAxMgg.jpg", "Dc2ZRmuH5OM.jpg", "dcbcxBSxQ0A.jpg", "dClrKg0TxSc.jpg", "DDJVz6tsRcw.jpg", "DE2xhP2u1co.jpg", "dEMix-SwBNU.jpg", "dg2Ag3e8W-Q.jpg", "dGCSeyKL5dE.jpg", "Dgu_j0vV0rk.jpg", "DGXbNENEpwM.jpg", "DHvkyrey3JE.jpg", "dkQA4qsmDgA.jpg", "dllm-HH0toI.jpg", "dMGRTR97Ito.jpg", "DmSpD4VINNs.jpg", "Dq7WGmSWBS8.jpg", "DTvS9lvRxZ8.jpg", "DuDX6wNfjqc.jpg", "DuQbOQwVaNE.jpg", "Dw3PlTbqC2A.jpg", "DWZIfsaIgtE.jpg", "dXbDgrGAs-w.jpg", "dycv5jdhx88.jpg", "dyRsYk0LyA8.jpg", "DZa1jrPjbqU.jpg", "E_SZ3ObGyTA.jpg", "e5nlD2LfGd0.jpg", "e5vv4IUw0pU.jpg", "e9l2T3YtiZ8.jpg", "EBp341tSu_Q.jpg", "eCw5wd3yKHc.jpg", "edHTapSEWTw.jpg", "ee81YSt4cIM.jpg", "EFYEni2gsK0.jpg", "EhHzJidkydo.jpg", "ehQal7cSIpE.jpg", "ehv3zQAa9zM.jpg", "eiOKp2RAcvs.jpg", "EiSHM7xjRAA.jpg", "EIzazUv2gtI.jpg", "ejys3sT2LHw.jpg", "eLKLn5FN70I.jpg", "ELS5RLbSukU.jpg", "eLSc9ZZ1UJI.jpg", "eLvvcjo0Cgc.jpg", "eP2LDd9SeII.jpg", "EqPnIcDW9g0.jpg", "erYPvNbc_mc.jpg", "eS4QgTifeFY.jpg", "EsVPUpDyGec.jpg", "EszBkjtG7wA.jpg", "ETnepJ1zgKQ.jpg", "EUGfsx2EmAw.jpg", "eXxUX1VWpOI.jpg", "ey_EjSzKFWQ.jpg", "f0c7pSCoZqE.jpg", "f1zTLuacFm4.jpg", "f4g2nPY-VZc.jpg", "F4miQNlD9MQ.jpg", "f5omY8jVrSM.jpg", "FafXBaAEowM.jpg", "FbM1yi4mMMc.jpg", "Fc-fa6cAe2c.jpg", "Fc7-Oe0tj5k.jpg", "fCF8I_X1qKI.jpg", "Fcl30mWtJQU.jpg", "fEE4RO-_jug.jpg", "FF50-LY2Kro.jpg", "ffygKCta8KQ.jpg", "fg4ZY92w0L4.jpg", "fHeQemJJQII.jpg", "fhxUP2EAz0A.jpg", "fi1gT23EtOo.jpg", "fi4B6GTX_Zs.jpg", "fjp4thii1WY.jpg", "flgwsL1wAcE.jpg", "fMfipiV_17o.jpg", "fn3KWM1kuAw.jpg", "FnSr820S2Mk.jpg", "FOm8LqH5lz8.jpg", "FopIxceEr8g.jpg", "FoUsDnDAnqM.jpg", "Fp9pNPdNwjI.jpg", "FPqMslF8wQk.jpg", "fpXUuOlwYLc.jpg", "FTk9VD2nPuw.jpg", "FU92piysGBg.jpg", "FuaDWyCnJxs.jpg", "FVeZcM6tBQU.jpg", "Fwg9-MXdBYA.jpg", "FXI_-OesT3A.jpg", "fxrkhf17fU0.jpg", "FZ4SVG2meTQ.jpg", "fzeWc3zh01g.jpg", "FzM1cYbL0GU.jpg", "G_VKjGoyoCE.jpg", "g0AOf2AZ-8w.jpg", "g1-sFn-j5D0.jpg", "G1mPnQM5hQ0.jpg", "G4JuopziR3Q.jpg", "G5RCuqDoZxY.jpg", "g5TxSM16S6Q.jpg", "g6ClKQ7VWsQ.jpg", "G7ONrDab6cU.jpg", "G8GaQdW2wHc.jpg", "G62oeL14rQw.jpg", "Gc2Id_7oWAs.jpg", "GdJkO3PLZrs.jpg", "gdZLi9oWNZg.jpg", "Ge4AKbnr6ME.jpg", "gEMg5dOUk7Q.jpg", "gFYAXsa7pe8.jpg", "GGEBtW2mWOk.jpg", "gHhl1yzCDdI.jpg", "gi-63nX4BoM.jpg", "giWIr7U1deA.jpg", "gkvthxO06Kw.jpg", "GLoeAJUcz38.jpg", "gm0b_ijaYMQ.jpg", "gm6yaxpXEUw.jpg", "GmB3WdjdzbE.jpg", "gmRKv7n2If8.jpg", "gNi_6U5Pm_o.jpg", "Gp9gFXf56yQ.jpg", "gSc0o6xVnmY.jpg", "Gsj_Xq7K-_M.jpg", "Gt7iyMj-vWA.jpg", "gXe8W3lAlcc.jpg", "gYPn3lbGRRc.jpg", "gYQwuYZbA6o.jpg", "Gz5-NQROQGw.jpg", "H_ebj0ZhhCQ.jpg", "h2ZmVAdezF8.jpg", "h4T_LlK1VE4.jpg", "h5WN3pkxPF0.jpg", "h9bxHt7yDMo.jpg", "HaB5otKgc8Y.jpg", "hCg9TCMnHyE.jpg", "HEp392y7cqw.jpg", "hEz3Jpl2cUA.jpg", "hFQL7BS6lrs.jpg", "hH-sYuRyZRU.jpg", "hI0-jWfRKqI.jpg", "hJ_0vSSZ_LY.jpg", "hLQGsWA6ST8.jpg", "hmUyEDG7Jy0.jpg", "hNHKczIYqgA.jpg", "HohFBT2t0go.jpg", "hOVDNS0IvHc.jpg", "HQE456q4n5U.jpg", "HRdyfERwQZs.jpg", "HrY_eDbF0XQ.jpg", "Hryms86U1cE.jpg", "hS2x1zl4rn0.jpg", "ht0DfjlZP80.jpg", "hTsYgSzrbQo.jpg", "hvAPFPHkYIA.jpg", "HvqgpU0qxgc.jpg", "HwLvqvcWEos.jpg", "hX4GE6FKlvw.jpg", "HZ6PMlto1SE.jpg", "hz9_jkrrptU.jpg", "HzbPwXRjjxI.jpg", "i0Ye1lBEgnM.jpg", "I3igok9jQIo.jpg", "i3NXPk4ROao.jpg", "I4AgeDIrHGY.jpg", "I9RC_DANDAM.jpg", "ICkaOoI2NLA.jpg", "Idp1xvmLPHo.jpg", "Ie_m_eBevUI.jpg", "IGFxEGwUYJA.jpg", "iH1n2ie6G0M.jpg", "ikaPqPUnjBg.jpg", "ILwLN6hV-X8.jpg", "IoZri9hq7z4.jpg", "iQ-f4N2yzTM.jpg", "IqgyBN0OIns.jpg", "iSvsf27wRns.jpg", "iT4C1aIS9Ww.jpg", "iTZeVNwAmkk.jpg", "iuTtlb2COtc.jpg", "IWBsDaFWyTE.jpg", "IxFMyYuPPyw.jpg", "ixiglvXJXyU.jpg", "J2npVg9ONFo.jpg", "j8Cli3mEpJY.jpg", "JaAm-0BBbmw.jpg", "JD-CsaaRpk4.jpg", "JdBYVNuky1M.jpg", "jeI992mvlEY.jpg", "JewlhY8DGTI.jpg", "JFm7YDVlqnI.jpg", "JFV1XHeLBjo.jpg", "jh8aeB4oBNw.jpg", "jh9660906z8.jpg", "jkBfGvb7NzM.jpg", "Jkhu8d0C5O8.jpg", "jL-_mug5cC4.jpg", "jLLZKC_9HhQ.jpg", "jlppEPjJQWs.jpg", "jm7ZAMAsPxI.jpg", "jm9YKT0dItk.jpg", "JOYWl4_NOlk.jpg", "jRn6b7585es.jpg", "jrTXBFcvoMQ.jpg", "JSAfPh1A25E.jpg", "jUsUzbmSLow.jpg", "jWRMXiHhDjc.jpg", "JxAlZOn4QhM.jpg", "JXeJANDKwDc.jpg", "k1v7_zScivQ.jpg", "K6wTSNz1S-k.jpg", "K7BMF0ozFS0.jpg", "K7LY9Ta0eiY.jpg", "K9_VFxzCuQ0.jpg", "kab08DP664Q.jpg", "kaUzXZcsuKs.jpg", "KbNL9ZyB49c.jpg", "kBUSELHHKNo.jpg", "kgEgOi32CE0.jpg", "kGg44zdgHYM.jpg", "kIbjHtE4fd8.jpg", "KIK3azN4w34.jpg", "KilybZma5vY.jpg", "KlfUbZJVInA.jpg", "KnE6u4hFx14.jpg", "kP9TfCWaQT4.jpg", "kpnwRg268FQ.jpg", "KR0g-1hnQPA.jpg", "kRpkRkO9KUI.jpg", "kuaJ6J9iTb4.jpg", "Kw0Mvqpj3Rs.jpg", "KW4pQFHKziI.jpg", "KWC9Y5kOYYg.jpg", "KWQhRId_7RA.jpg", "KX06ksuS6Xo.jpg", "KxlPGPupdd8.jpg", "Ky5RT5oGg0w.jpg", "L_Z7lQTtJK8.jpg", "L0X03zR0rQk.jpg", "l2b02sUKf0I.jpg", "L2GQmOYFCy4.jpg", "l6yzZdHruUI.jpg", "L9t86v_JMG0.jpg", "l46E7Q3UKqI.jpg", "laAbLsErZrw.jpg", "lcpklK1wNAI.jpg", "ld3wSzQXD5Q.jpg", "LexiKXhmu54.jpg", "LeYsRMZFUq0.jpg", "lFsumKiRVRs.jpg", "lgGmYeAm0jk.jpg", "LgIop9jKNv8.jpg", "LGkUW5cUPz8.jpg", "LIBsKhpeFKw.jpg", "LIIDh-qI9oI.jpg", "LKf-Sp_nhC8.jpg", "lL-df-6LGJA.jpg", "LlWs87C2B7Q.jpg", "LNDhIGR-83w.jpg", "LP02BulYw3g.jpg", "LP6ppSM3xq4.jpg", "lPi7cQGNqcM.jpg", "Lrch6vhWF4A.jpg", "lTyLyF4CV_c.jpg", "lum_eNjiplg.jpg", "lvFtkVqStTA.jpg", "LVuTCDB1iMc.jpg", "lvV3jSLYK8A.jpg", "lw68FF0GEX8.jpg", "m9soynkOA0A.jpg", "mA1S2crUzFw.jpg", "MD_lxVIwO2Y.jpg", "ME7qwm7oerQ.jpg", "MeYkO5vkakg.jpg", "mfTnowfhW2c.jpg", "MH_vjfNPv70.jpg", "miRk-XQMviQ.jpg", "MkcHBp4XKxs.jpg", "mkiA9tuJ-xM.jpg", "MmrGeWxd87Y.jpg", "mNyLzc3MU_E.jpg", "mp3V9tuPf_0.jpg", "MPbUaIZAaeA.jpg", "MpdWc0LAQVo.jpg", "MPiILYNStd8.jpg", "MpJIg_3DnLk.jpg", "MqePxS6iyvA.jpg", "MS18aoIDK0s.jpg", "MVKOkHGZjoo.jpg", "mx0ZcpPQVBg.jpg", "MXFkjMNXfpY.jpg", "mY3SEMTROas.jpg", "mYfJxlgR2jw.jpg", "N0EbZYS3QrM.jpg", "n1dEqq2hepw.jpg", "N1H5tyzmzuA.jpg", "n4fXmZTVdZg.jpg", "n9xhJrPXop4.jpg", "na3i6hcUo94.jpg", "nAW4uqc-7T4.jpg", "NeUODC6F7zk.jpg", "ng9dtd6qwuM.jpg", "NkE0AMGzpJY.jpg", "NKOVl6F8bjA.jpg", "NKzFLdWphdI.jpg", "NLcim9EPx6c.jpg", "NLOp_6uPccQ.jpg", "nq6P8eN8kKs.jpg", "nqDhZT67500.jpg", "NrM4_kM1d1o.jpg", "nS1F1dQaANs.jpg", "nUP0SLPtQgU.jpg", "NVQtZNcDMvA.jpg", "nW948Va-l10.jpg", "nyzhtvtJWDQ.jpg", "O__Lo2FQJKo.jpg", "O_uGoBNYmdw.jpg", "O5DaEUolvRs.jpg", "o27JxueWodw.jpg", "OC29BN3R8dM.jpg", "oD155zWANQg.jpg", "odM92ap8_c0.jpg", "ODY6JWzS8WU.jpg", "OEu1OWf8ezU.jpg", "OFBsuEGhQkI.jpg", "OHAOEJei6iM.jpg", "oHmj5xETHEY.jpg", "ohrhxTLvfds.jpg", "oi5QIo0LG18.jpg", "OJ2TVNS-0d0.jpg", "olXYZOsXw_o.jpg", "olYOijqE2og.jpg", "OMAZB31W9nE.jpg", "omPFtxcWFcM.jpg", "oois7rlbO8g.jpg", "OOMxU9f1FBU.jpg", "OQwwGnmdcdM.jpg", "ork4qET7pV0.jpg", "os8d6CqbiVs.jpg", "oshvcDjEKZc.jpg", "oTU2R4JRGQg.jpg", "OU7fKIwaSOk.jpg", "OVms-94BZIE.jpg", "oVPYa7QCmRg.jpg", "oxoWhyS9buA.jpg", "oYpUZjxJOVg.jpg", "P_6my53IlxY.jpg", "p0GUZVU_TTU.jpg", "P2wtyrjG3oU.jpg", "P3cffdsEXXw.jpg", "p6OoY6xneI0.jpg", "p7HGUZWq_8s.jpg", "p7hizWT2Og4.jpg", "p9a18OPYkG0.jpg", "p9LLoijPQfg.jpg", "PAgQHcKMOIk.jpg", "PCzkHAI9D7k.jpg", "PCZYPgprwFk.jpg", "pEO2a7QzXqQ.jpg", "peSabCX_rB0.jpg", "PGJ43zaam_0.jpg", "PHr72DM762k.jpg", "pixJVqUzTdk.jpg", "PJYy-e3kXnU.jpg", "PkKnp4SdE-w.jpg", "PKtnafFtfEo.jpg", "POhsRpnErqA.jpg", "ppkX8epoD9g.jpg", "pqHF8fnI8Kc.jpg", "prSxHZBY3CU.jpg", "PRU3qndohWI.jpg", "PtaP4UkZKyc.jpg", "PtwGU9VuGpA.jpg", "PUtk3ryShOo.jpg", "pvPsJFRGleA.jpg", "Pw4y-Q7moGY.jpg", "Pw6b0-Wi_FI.jpg", "PznMpRASjAg.jpg", "q1aelPRtZVE.jpg", "q1mLq0QCkPk.jpg", "q01z2vrQTrE.jpg", "q1zrv6OqPqY.jpg", "q4dANhP7BVg.jpg", "q7u0xsMw3EE.jpg", "Q8WbLsOkGrE.jpg", "Q88P1gpOJxA.jpg", "qcGgPlepbw8.jpg", "QcS9ZndErHc.jpg", "QcTwbXLMm9c.jpg", "QdpxoFcdORI.jpg", "qJf8Ef4pqQk.jpg", "qjQjxpnwVZw.jpg", "QjSyAnjE6Yo.jpg", "qKJlkvg76lc.jpg", "qKp1f7Vn9dM.jpg", "QMNeT1LTV84.jpg", "qNIyRL8EOk0.jpg", "QNQJsParWDo.jpg", "QPLiY3TGa3I.jpg", "qpw5i2j6cHc.jpg", "qqSMqgGuSgU.jpg", "QSaW4KB5IQk.jpg", "qsF60s_tB3w.jpg", "QsUfsZzxi9c.jpg", "QtlBpXiDAUo.jpg", "QtMzV73NAgk.jpg", "qTolSU-2aXk.jpg", "QuBlV0dixMo.jpg", "qUUloBe5vEo.jpg", "qvu4nPMyl3U.jpg", "qWUsV2Ios8A.jpg", "QwzvNAAqH3g.jpg", "qzdGo7FBndA.jpg", "r_VSll0WLZE.jpg", "R-Yq1AlIwsc.jpg", "R0R0gSE1jmM.jpg", "R3t78CfkIhc.jpg", "r4P-WOOUPk4.jpg", "R7klyFU_6xM.jpg", "rb1jJzpAJ9I.jpg", "rCiBgLOcuKU.jpg", "rDa5A20jDGs.jpg", "re4nmwWJrBU.jpg", "rFjJs6ZjPe8.jpg", "Rhf8qyYtq60.jpg", "rIvwpeRtK58.jpg", "RJ0jdO5ZfU4.jpg", "RjbNMogQw8s.jpg", "rJSZfrJFluw.jpg", "RkID8_gnTxw.jpg", "rlqCj73sppw.jpg", "rmkGOy7pS4I.jpg", "rokGy0huYEA.jpg", "RotTKG2qL3Y.jpg", "Rp8NfZpMdX8.jpg", "rpPCjyVfQOo.jpg", "rqJNZhlb730.jpg", "RsEZmictANA.jpg", "RtxsJVebOqI.jpg", "RUQl6YcMalg.jpg", "Rw7qsAoJs3g.jpg", "rX7BP08hW_0.jpg", "RZA6-vfmi-c.jpg", "s_UcjEq2Dgk.jpg", "s-MsZo02dos.jpg", "s1ax8Tx_Jz0.jpg", "saMLAFOuGjA.jpg", "SCrO3kS1upU.jpg", "sG9rX6Ifzhw.jpg", "sj9J2ecsSpo.jpg", "sLmLwgxnPUE.jpg", "snrPqH84tuc.jpg", "sQg4VCB3bYw.jpg", "SR3DVWRwslU.jpg", "ssq6X6alZ3w.jpg", "SuxLrcx6MPY.jpg", "SvXqmxnxFCQ.jpg", "Sx6dAx7dnXg.jpg", "sXkhYC8Z9lw.jpg", "SXVjltC4ZGo.jpg", "sY8gUtyeAKE.jpg", "sY90hM412iA.jpg", "SZQhgExjBvQ.jpg", "t_G0ia3JOVs.jpg", "t3KZnCgiMW0.jpg", "T4eyHyJZmcg.jpg", "t4KdyXrvB3w.jpg", "T7lhGz6Bfik.jpg", "t7UDxhpMgCo.jpg", "T8PprcRWG5U.jpg", "t490zXLrQDE.jpg", "tAe0yUEzAaI.jpg", "TB5yhZdF8SI.jpg", "TC1smbjIVJI.jpg", "TCMnrssX1NE.jpg", "tcYodQoapMg.jpg", "TD_BZN0bn_U.jpg", "TDiXxsQ0w2Q.jpg", "TDNNkOv8M8Q.jpg", "TFzkbos0oeo.jpg", "tI1JGPhYBS8.jpg", "Ti3hglIhVD8.jpg", "TMjgM3l5l3M.jpg", "TmKh7lAwnBI.jpg", "tnNiSgovl4U.jpg", "tOD4fkQiulg.jpg", "Tpv5ibeHdcE.jpg", "tQ0yjYUFKAE.jpg", "TQHEJj68Jew.jpg", "Tqkxl0136LU.jpg", "tqsy9Wtr1qE.jpg", "ttmC2XvKALA.jpg", "tTyi6jB8BxY.jpg", "TU6zM63GuLo.jpg", "TU99gX7NGZ8.jpg", "Ty-CHgmCeKw.jpg", "tyrVtwE8Gv0.jpg", "TzFRVk2ektI.jpg", "U-ZMQIiRfvk.jpg", "u0LaoQks5mY.jpg", "U1Eg-vtSABE.jpg", "U3BVFY9wnTw.jpg", "U8qJc6znzZc.jpg", "uBEbZBthWY8.jpg", "UBhlqe2OTt4.jpg", "UdfSrJvqY_E.jpg", "UE5AHE2Ypr8.jpg", "uf-36RC6JHE.jpg", "UF7hTMMeRv0.jpg", "UfqV3dAoiUQ.jpg", "UFZ5EMTcehA.jpg", "uioLnStATUc.jpg", "ujf3iJoWgrM.jpg", "ujQTUXdVV-I.jpg", "UmFCLRqMkCc.jpg", "UmiVBYrBrkU.jpg", "UnA7tepsc7s.jpg", "UnMJH_Gkp4w.jpg", "unZpEayPXio.jpg", "UoI9riNffEU.jpg", "Up7j6t6Jrmo.jpg", "us6q-8Q4zng.jpg", "utEEXr5eURs.jpg", "utlQf-A6XAE.jpg", "UuAywk8a_w8.jpg", "UUOGVgComrU.jpg", "Uy_Z0JbIWxs.jpg", "uzkD5SeuwzM.jpg", "uZmXF50Yx7I.jpg", "v4yqcI8HinA.jpg", "v7bnOxV4jAc.jpg", "v97FPN2US2o.jpg", "vC--9WrnmsU.jpg", "VczZCoZ21jk.jpg", "Vd9QkWsd5p4.jpg", "VDBc1etieAA.jpg", "vePc5V4h_kg.jpg", "vFWv44Z4Jhk.jpg", "VHrMlzTcAjs.jpg", "VImYeXnr13Q.jpg", "vJH28ICkCdU.jpg", "vJYL4Osyipc.jpg", "Vl3swga-Xrk.jpg", "VlFxGiRGO_8.jpg", "vM-Bja2Gy04.jpg", "vMLk_T0PPbk.jpg", "vp3RJ4flNWU.jpg", "vp5sSqyZ5Go.jpg", "VpQo2rZLT5E.jpg", "vqF8DrrBrII.jpg", "vRFS0MYTC1I.jpg", "VrKW58MS12g.jpg", "vrUOPr9v8g4.jpg", "vRXZj0DzXIA.jpg", "VSpgaN3wuag.jpg", "vtRJZEHdu8M.jpg", "VtW3OhQpyh0.jpg", "vw2FOYjCz38.jpg", "vWAC8Wkt9ok.jpg", "VYEtNWp5VgA.jpg", "vZA5heWazIQ.jpg", "w-G39yJCHeA.jpg", "w-wH2__-bhs.jpg", "W7ZIz4w9Edo.jpg", "W8EWc1cne3Q.jpg", "w3333Fo6ufY.jpg", "wAt4DQtgYwM.jpg", "WcwGleN38zE.jpg", "wE-aQO9XD1g.jpg", "WfCLmsC8Tdw.jpg", "WMweEpGlu_U.jpg", "wnWbb3_U9Gc.jpg", "wOc1PLiabZI.jpg", "Wq5S8Dt_HQE.jpg", "wQATS4HOxdo.jpg", "Wsije1KetVw.jpg", "WTm8etN-aUk.jpg", "wVCAr0yMy-M.jpg", "WW1BpABbzHs.jpg", "wW1lY5jFNcQ.jpg", "wW8FnNghyvI.jpg", "wwB91-jxCK8.jpg", "wY6UyatwVTA.jpg", "wyCAyuzfx_o.jpg", "X-uJtV8ScYk.jpg", "x0eDhFB0-_U.jpg", "X1b3C2081-Q.jpg", "X1mSODr7BtM.jpg", "x4eHK6KWobA.jpg", "X5xruf2Ert0.jpg", "X7d6Dt17yHk.jpg", "X8oxmgDIh70.jpg", "x61esYkURIs.jpg", "xBe-36v3lQo.jpg", "xC6J4T_hUKg.jpg", "XegHMc35Bo8.jpg", "xF4xik4CSEw.jpg", "xGgl9aPqCdY.jpg", "xH9Cq3d67fc.jpg", "xI_lxFv203I.jpg", "xIzBCXEdmEo.jpg", "XJcXjUB0yqY.jpg", "xl125ZovpAA.jpg", "xN8ENrfE-TY.jpg", "XNFBE0t0hIM.jpg", "Xnz9FHj3Ifw.jpg", "XoIqsqI2lNU.jpg", "XOIZZEdfrfA.jpg", "xoWxv2yZXLQ.jpg", "xpv8PRcesfI.jpg", "Xqamnbm-ZLA.jpg", "xQOO2xGQ1Pc.jpg", "xSs4yUZhb-I.jpg", "XW2E2Fnh52w.jpg", "xwdhHTtc-3w.jpg", "XXjXtuWKn3o.jpg", "XxlsLmHwCSk.jpg", "xxNxqveseyI.jpg", "XXYlFuWEuKI.jpg", "xZOp1-aE-8s.jpg", "Y2NK8wZZg1U.jpg", "y4SQtg0G-2Y.jpg", "y5g-PTeDkwY.jpg", "Y8djQvSdN4o.jpg", "y9Fne3oUwX4.jpg", "yALoy13mmz8.jpg", "ybPgmjTRvMo.jpg", "ybQeJSj6njE.jpg", "YdAAlW1HG_I.jpg", "YdAIBlPVe9s.jpg", "yEfsaXDX0UQ.jpg", "YEoCQSXl_EY.jpg", "YfXLLt-yqQo.jpg", "YHsdYu8RRSI.jpg", "yjetoy-RKQ8.jpg", "ykC7HZ1-FrQ.jpg", "YL1mCanx2lY.jpg", "YLXfyHsfFz0.jpg", "YN0vl1pBAl4.jpg", "yooMQ5ypIlM.jpg", "YrtMpe0WOpc.jpg", "ySo1_loUkcQ.jpg", "YspVHSxhncI.jpg", "YsUB1yZvVR4.jpg", "YSuOwf24psk.jpg", "yTXvHXsmoqs.jpg", "YTZ-GZPTND8.jpg", "yUYT9s-oPNc.jpg", "YxksUfnuEbI.jpg", "YXuKX_0iAsQ.jpg", "yYtg0VZcrLs.jpg", "Z-xDoDSDM2Y.jpg", "z0K6r1hoD7I.jpg", "Z1-xFOfnzMU.jpg", "z3FHbvMIkSA.jpg", "z3hI5r0yRoU.jpg", "Z3kAZse4xgM.jpg", "Z7jMfUno-Uc.jpg", "Z8y05MbYm1Q.jpg", "z9eoubnO-pE.jpg", "z9i14AlzWL0.jpg", "Z9Jj8QFbT3M.jpg", "z9kcz4AFriY.jpg", "z58k37I4Crs.jpg", "zBvFuq7Mkzs.jpg", "zBZ4skqOm04.jpg", "ZczBaysG1L4.jpg", "ZeerrnuLi5E.jpg", "zFT3f9biz68.jpg", "ZHxAkxGBUhc.jpg", "zJCdkOpU90g.jpg", "zlvWd717pvw.jpg", "ZNVlIMHS1sk.jpg", "zPSXK_hzOZ0.jpg", "ZQ7_En2xEm4.jpg", "zqllxbPWKNI.jpg", "ZRjgy6RAupY.jpg", "zrrs9LGIfyQ.jpg", "zrsBjYukE8s.jpg", "zRXcOZFgMfY.jpg", "zsXhHhSPrnc.jpg", "zV0f4GJTrLM.jpg", "zVCs9Cug_qM.jpg", "zWz6v-UAs8Q.jpg", "ZynBkp-4GQ8.jpg", "zYpUs22wAL4.jpg"];
var imgList = [];
var indexMax;
var click1;

function preload() {

  poppinsExtraLight = loadFont('./fonts/Poppins-ExtraLight.ttf');
  poppinsLight = loadFont('./fonts/Poppins-Light.ttf');
  poppinsSemiBold = loadFont('./fonts/Poppins-SemiBold.ttf');

  indexMax = thumbnails.length;
  for (i = 0; i < indexMax; i++) {
    str1 = 'images/'
    url = str1.concat(thumbnails[i]);
    imgList.push(loadImage(url));
  }
}

function setup() {
  createCanvas(w, h);
  background(255);
  frameRate(30);

  //      click1 = new Clickable();
  //  click1.locate(w/2-150, h/2+200);
  //  //This function is ran when the clickable is hovered but not pressed.
  //  click1.onHover = function () {
  //    this.textFont = "poppinsExtraLight";
  //    this.color = "#FFFFFF";
  //    this.textColor = "#000000";
  //    this.text = "Clusters";
  //    this.strokeWeight = 0.5;		//Stroke width of the clickable
  //
  //
  //  }
  //  //This function is ran when the clickable is NOT hovered.
  //  click1.onOutside = function () {
  //    this.textFont = "poppinsExtraLight";
  //    this.color = "#FFFFFF";
  //    this.text = "Clusters";
  //    this.textColor = "#000000";
  //    this.strokeWeight = 0.5;		//Stroke width of the clickable
  //
  //  }
  //
  //  click1.onRelease = function(){
  //   console.log("click1 have been released!");
  // }
  //
  //
  //  click2 = new Clickable();
  // click2.locate(w/2, h/2+200);
  // //This function is ran when the clickable is hovered but not pressed.
  // click2.onHover = function () {
  // this.textFont = "poppinsExtraLight";
  // this.color = "#FFFFFF";
  // this.textColor = "#000000";
  // this.text = "TNES Plot";
  // this.strokeWeight = 0.5;		//Stroke width of the clickable
  //
  //
  // }
  // //This function is ran when the clickable is NOT hovered.
  // click2.onOutside = function () {
  // this.textFont = "poppinsExtraLight";
  // this.color = "#FFFFFF";
  // this.text = "TNES Plot";
  // this.textColor = "#000000";
  // this.strokeWeight = 0.5;		//Stroke width of the clickable
  //
  // }
  // click2.onRelease = function(){
  //  console.log("click2 have been released!");
  // }


}

function draw() {
  background(255, 255, 255, 20);

  index = index + 1;
  if (index == indexMax) {
    index = index - indexMax;
  }
  image(imgList[index], random(w - thumbWidth), random(h - thumbHeight), thumbWidth, thumbHeight);
  // fill(0);
  // strokeWeight(0);
  // textFont(poppinsSemiBold);
  // textSize(80 * screenFactor);
  // textAlign(CENTER);
  // text('Youtube Thumbnail Analysis', w / 2, h / 2);
  //
  // textFont(poppinsSemiBold);
  // textSize(40 * screenFactor);
  // text('an interactive visualization', w / 2, h / 2 + 60);
  //
  // textFont(poppinsLight);
  // textSize(20 * screenFactor);
  // text('using the top 1000 trending videos from 8/20-6/21', w / 2, h / 2 + 100);

  // click1.draw();
  // click2.draw();

}