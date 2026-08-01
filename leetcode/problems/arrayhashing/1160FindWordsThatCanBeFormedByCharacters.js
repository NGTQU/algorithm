/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
  let countChars = chars;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      if (!countChars.includes(word[j])) {
        countChars = chars;
        break;
      }

      countChars = countChars.replace(word[j], "");

      if (j === word.length - 1) {
        count += word.length;
        countChars = chars;
      }
    }
  }

  return count;
};

console.log(
  countCharacters(
    [
      "qobxtxjzdngkrzamsxzdvbvkiwijokwdyndqllhqpaoxzwonriclsm",
      "fahtqqnuzhhhrcblquaosdfdcqoskxcsdnhtwvvvzsxkpjprytieieniafnltxmuzwkdnttofpibi",
      "xedhntgrqegfs",
      "wrssfvsbcehbahbvojnzgacbgveitirkjmmyiorwykynqddgydzgfvlvplfnyumgxturxraonpchd",
      "hpmdzhpgijirecxzkuyhptiytnuscu",
      "xljgysrjjukphjgzbpn",
      "gmwbirxt",
      "yhvpsvsnhfmbmcpihnqtodspbvexnpgcqrrughbakbufyjispkquvfppkaffypdpnvikjygdaarcigipfhuvzzzbgw",
      "gvvbgpjolobpbxcnhnzuqrsqgrkanwmnnkqynakkooailoafunopsrlijqhaqmszssxikftcfoqsw",
      "naktgxfyuvuoh",
      "muui",
      "ghzqskipqprrzeligdjyowypeerogxonvztsq",
      "onosezgutawtzteoagbftclsqpfsxtwetourxjxurdqevrir",
      "fcskqxwkzsldsjihahalnw",
      "lsstgzxjxabcbspjwelqmhtnurgfmdtpaihxnxad",
      "nwrwtwetgjwooevhxhkzlvsyghtkldioyjhkkniepktqs",
      "utohzbqvkqkq",
      "vdoqnhtidgicevprrrwlbtldtaxpsxdhxhgbwlkbeglkbhrujtafswjkozdmdpvwhsuskofmxxtprtpopacslinwozth",
      "zqlzxpemomnbzxlorvlkxt",
      "kubshvnldnkofitnnjere",
      "czxmqpowzzhdbhgtlqdokrzxowsvwyavfhcycctgdvrsfzmanrlktfaetnuayrqkvhcbxezfahkrxgaaztovrxuhnll",
      "rrcesnfbxglhjawldnnuiiepdsofbrsbjczlemusqwvenicxmtdmpwfrnizymfmqynvtkbrmablcugroshc",
      "thholqebekkysstqzlbbdapktxumygplqganucwnahmrihiraxdnvbiaqhykcti",
      "fagqnapzeeglbdzsbneosxmptmwopjcxztukhpjkqjmjbkpbzrfaqskctehyboeddmilkwlurcb",
      "wtjdykncubkduhxiwwusoxvzpnaxpnzdjmwddnonsmmvwmuaxghetgrwpoeqbprxgviwzagyqopfdakrqjgiy",
      "nsftehpgzstetbganbtozdopptseucdqkhzdmujnzjdvufqtikgeepttnrabb",
      "ozihktgnvljzhqwanxemtzxphzqvmoblvi",
      "iwdsrekqllbbyarzzmbqbvldvxctdeswiyahiwfoefhfsfwktdzaulnalewbusazjhcbtxjuck",
      "dylhds",
      "idnaddnzbodhjrpshhahnbbnrskruxszxeeyanumazvahktizectmmvjbhnhbrohsyqhrgq",
      "scyzsykrwzuozmbrbenfiqpxchtpmcxepjiglaeionsmbwrzeidupayusczcooudpcgkgspbuyzcdfymsejucb",
      "otpcfrhckxmnseayhwoyjjfkceaoznmmkikpdsuueyqmbsuelmhqnmdsjs",
      "xoghnhpypfiibqrpgtyux",
      "cxhpbcziptgandiwxtctdjpboiqwv",
      "gyjosuhwgbqpcdsdqadopdqozjxpzwxbqaffnxaddhgrxmunpidvpnijxnbawshcznkmprpgkhvzxmzbaftedgtfgjhaisdnva",
      "jlnxshfthqgzlnvjzztrnjswwsotpybxecyqhnfkbfwvmxpcs",
      "mtddspmqwbnoiajpexsuhxogarduzsoammqqelh",
      "sixkvxgnbalipwmkbcwpugpvolsvvlmaaeeobmoeogspbkbsskwjdqkite",
      "xhsutriuynfrldjbhexhxjgcfwcujvwsqfiaqwvjnkjkswdpaynelhryrzfeqjhajezmolk",
      "zfiredtxenzgtrkiamuoubetexzbnwkdtxbtihhtsfubnmryxq",
      "sot",
      "szgkkhuhkcnr",
      "firxkgvkzqlnallzwjispsizoawobemuhqrhpyvknasjzwctamfuonder",
      "vyei",
      "fidqszoicndwifns",
      "xkickycwzj",
      "gmybflbjunudxrwguzditaxmyadgdjeengut",
      "gvlwwnmrddhzwewugdtobauecealfhasyftgxkiqeluysxxmroukfziifpryvddggttojhcszeyjetbsldmorqnbuqreuxfw",
      "vbhuerxkcjlkamgruturkbrubbscmvzqruwvlrlyylcvuiothkhpznjzsfnyfoaqkziyjqzdreeygmtbdljwnaojexfgmjlup",
      "bxjvop",
      "aswdmctosieicucsjwxych",
      "lxbtlhnrfyaznrqgxrltmxkjmhdqjjgnvstxaygmuxznjfiiukm",
      "npncdabkmbgfhnedcmbfyjiplzwymgvsfrifvvjayobsygwolqbwkblqutakcshnlsqadtfiqmpauslvqd",
      "kuyemuuymacyvmahtagmcewkspverpjtjscccnrczchgkjzppdxcalxxcxrwnepk",
      "jxwouobfvzttz",
      "yucpsdhqvzboeezcqpxsepuuk",
      "iwbdmxdcbypnzqmgkrjhfivkrmnv",
      "lpqklgcwdvgbghfyoyejnpexrelywqfdtczflwetbxvzigtvisi",
      "dlasodatffcreungntdmezgfqklrabyymsnhdberufcrgpxgsziklznhdprbczhbxgtuslufycjronozdqumzlnidkvaydg",
      "oejzlmrrbdysqlezifcvgjnmvodfvmrnjmnfkejdbnnyljzjaxfecrfefdgarqbtwoijuktacywmsubtxtgzkbnstgrsrjpkdfe",
      "mlegvhxielwlfadlnqvnipcuizpdxgtvro",
      "vwgmwkbturocovaykdsjaftbtgmtwknnmhexfgcfchpwwgcgecfobbencotjizxbtdrijwfjxdsxanwfjyjamrxrdaiusgr",
      "xjmkcsekcorldyrjiavrhuhqtndujymc",
      "rmxwcaorznumwxgwnibnxwzvnxjhzwqzgmkgifnnnnzpgtsvprycjtdeirtpqbduursabbidzkfbexgthkoacagkb",
      "tkrsxhztwgvqxamjtexklnooaloydjhejlbasavskttwxiabarogvmfdfjttaxhgqljlbfnrvrwwbxkurhufiknoxfmemcv",
      "cojlyayladyrhofzetaddteqrjbyxtvyszgdorexqmgznqmuvemegbwki",
      "zktqnurtpttlcjgkmnprqeyeepqunfqqvjwuevwbvnaupyofwiqwhpyumyfwpjrruhleromrmpvczlkxqiuq",
      "gyxl",
      "qmhwlymfsjixvvjhkczylqcsnbjxliasetxciggtfl",
      "gizysqkqbyhzeagzsscvdigtcfiupyhqovaaioxfrphugxzrcjvwqwc",
      "hpgkulrmbaixnjiapmjiwhwsgromfqpxqkkiscjwpiicslwcijginxfiwqakeezeohhskxgvgdkezmqys",
      "vibswdyqaxjvqsffwmcismooheyhwzqvyzezluejztlgddshvwcryzcllaisxrygwqyyoiaivfvgtzicycyrkckv",
      "oyclwdejlifmocfjsbgmernsyitkfaahjxfnwnusrdypsziawlpsjgnavytdihpxcmugshnqbkyfts",
      "xwcbiporfbktpvqhznjuaxfcdykifuzwdsdhxirwwxinoffywgxscrtuwhvuwjejzqirsfijgguouapqpmfdnpsfm",
      "qffrjfkj",
      "rpynimubaxdgbrkdawgugnhobaowxdnzkiidworcsnejgqctftyksvbhiwkcnyffmsbxwptqn",
      "oeqdvldvfbklukstxwomapaauaozblhxudkdxihepqagndnlkvbqhluscvczhrsrhodnftoszhjdymuywdtjgzbmkrdf",
      "xviupppkeswkctwlqwyuhokbhqqjshmaeiouhununbhrkabacenkg",
      "habomjnlznqvckmowgelhnglfizogckplbymkdowfpicxydzgoskckraxpdysksvzezcpg",
      "zemawxwjeowraaqsqytsshtavnvoyiyollelxqabmjwhxtrdijiacbbjiiyzwkxboot",
      "jcnpsxnkbqdbh",
      "bftrbaurtzkftodotjguzjmwxrrmswxwclohotuanypmhtemmsaicwckowmcdmpnhcfzptekpgljfvwpqjgilxu",
      "bbaigjqxdmuchkkb",
      "effbptpwafzqbsebbjmvdcxdbmnlfqjklongafzkvaqmkehefedjxgxlbdhltihtgfqjjsdis",
      "lhuxgqpwcgpujfvvnlrxhgbiwxmxzhglyhkdkafafojtlkuxkmjwlxrd",
      "ussuyjqsxwsdhkjeipwycrkcxxjatoqhygzymgikqdnqiyyzlbcdlgtmneyickucbkpkza",
      "ykmsksjorovmdymlbgprvprnyxwppvwgmzfjsqouvgara",
      "wduqkbncayo",
      "qdfkyomjlhfozonwpdxllqdnvpohyijqmyymuclnydzmlqksntdfj",
      "ynzekkkljzrvnwclzcfgtvcmstxgadxpztofckypbgqgbnumnkeaqclaspzxjbygtkjznxeduhbksr",
      "aw",
      "jbremnahqoiqktpbkteefdkbrerrxmhqbbselpnfzapgmxidrhbixetaetjcroufa",
      "wtufuqgljvxzsurhviikdxyuythezjnvwrxqrykmotkhlphlyfljjsfugzwxxfqkc",
      "ytjuaagqnfxqwiopolnejmoxow",
      "oqoskpzkwxsffgeuuhdklidtmjobzayatyaqefgwgqbo",
      "qkhtpuhhkspffkpryvdjasbxhtfrmptpljszvtgvhfvqpxypxfdaphfqdmigzgfg",
      "goddugelwdvemxwureitzwqmbqeqtymrlrzahuxnpgufaagbpexwpoahvdnsyvgxw",
      "dfhxrctagxkuasofoejsalcerkbtsjwnbnoahsumzfyiiskhzzwyykeefszrzrbztbrzhxxgaajb",
      "tjsardsbhmhefysdqtbhzsxukbwdpioqaohloaancxdkkmofniojrvxj",
      "jzjozqfqiwyfadplibubtpcfxxfvjtbizxlmpaccjpihvnrtvfqtfiaztvfbednyemfmahbljdvykddawaujdksenm",
    ],
    "fcxpzkzkqeyeijquyfixvlzjpzomujrqzxeoynjiflnmdrpdkrm",
  ),
);
