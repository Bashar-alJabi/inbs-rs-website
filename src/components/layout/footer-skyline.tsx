/** Decorative architectural streetscape for the INBS Real Estate footer.
 *  Pure inline SVG: no image request, layout shift, animation or accessibility noise.
 *  Its common ground line is aligned to the footer's bottom edge.
 */
export function FooterSkyline() {
  return (
    <div className="inbs-footer-skyline" aria-hidden="true">
      <svg viewBox="0 0 1600 290" preserveAspectRatio="xMidYMax slice" focusable="false">
        <defs>
          <linearGradient id="inbs-re-skyline-rear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A4DDF8" stopOpacity=".22" />
            <stop offset="100%" stopColor="#7AB9E4" stopOpacity=".065" />
          </linearGradient>
          <linearGradient id="inbs-re-skyline-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A9DDF7" stopOpacity=".4" />
            <stop offset="100%" stopColor="#6EB5E2" stopOpacity=".11" />
          </linearGradient>
          <pattern id="inbs-re-facade-windows" width="18" height="23" patternUnits="userSpaceOnUse">
            <rect x="6" y="5" width="6" height="10" rx="1" fill="#B8E8FF" opacity=".4"/>
          </pattern>
        </defs>
        {/* Distant residences and city towers establish depth without competing with the copy. */}
        <g className="inbs-footer-skyline-rear" fill="url(#inbs-re-skyline-rear)" stroke="#8FC9ED" strokeWidth="1">
          <path d="M0 290V235H46V209H76V235H121V248H162V189H200V161H223V189H263V243H307V211H343V184H375V211H430V233H473V154H513V133H539V154H582V217H619V196H658V170H679V196H718V239H770V176H814V151H835V176H884V231H941V211H975V176H1002V211H1065V236H1106V165H1144V140H1173V165H1214V221H1261V192H1299V166H1321V192H1357V230H1401V202H1440V170H1464V202H1517V228H1564V209H1600V290Z" />
          <path d="M194 161V145H229M491 133V110H550M1123 140V123H1192M1447 170V151H1474" fill="none" opacity=".65"/>
        </g>
        {/* Grounded illustrative architecture: villas, townhomes, mid-rises, towers and residences. */}
        <g className="inbs-footer-skyline-structure" fill="url(#inbs-re-skyline-front)" stroke="#B0E1F8" strokeWidth="1.7" strokeLinejoin="round">
          {/* Low contemporary villas with flat roofs and glazed patio doors. */}
          <path d="M0 290V249H23V218H74V202H110V218H143V241H171V290Z"/>
          <path d="M0 245H171M23 218H143M74 202V189H110" fill="none"/>
          <path d="M20 290V265H48V290M58 247H87V276H58ZM99 247H133V276H99Z" fill="none"/>
          <path d="M171 290V250H202V234L224 218L247 234H276V251H295V290Z"/>
          <path d="M186 250H279M224 218V208M201 271H218V290M233 260H268V280H233Z" fill="none"/>
          {/* Garden apartment residence with stacked terraces. */}
          <path d="M295 290V175H316V155H388V175H410V290Z"/>
          <path d="M308 187H397M312 212H394M312 239H394M312 266H394" fill="none"/>
          <path d="M316 188V290M389 188V290" fill="none" opacity=".55"/>
          <path d="M333 191H348V207H333ZM355 191H370V207H355ZM333 218H348V233H333ZM355 218H370V233H355ZM333 246H348V260H333ZM355 246H370V260H355Z" strokeWidth=".85"/>
          {/* Art deco-influenced stepped tower. */}
          <path d="M410 290V229H443V162H462V120H483V83H519V120H538V162H560V227H580V290Z"/>
          <path d="M483 83V60H519V83M501 60V41M441 173H560M421 230H570" fill="none"/>
          <path d="M467 149H529M467 176H529M467 203H529M467 230H529M467 257H529" fill="none" opacity=".65"/>
          <path d="M488 98V278M505 98V278M522 130V278" fill="none" opacity=".48"/>
          {/* Contemporary waterfront residential podium. */}
          <path d="M580 290V237H605V190H641V165H707V190H746V237H769V290Z"/>
          <path d="M605 214H746M597 239H756M622 265H728" fill="none"/>
          <path d="M626 193H647V209H626ZM661 193H680V209H661ZM694 193H714V209H694ZM624 238V280M726 238V280" fill="none" strokeWidth="1"/>
          {/* Two differentiated towers with rounded parapets and balconies. */}
          <path d="M769 290V127Q769 112 784 112H837Q853 112 853 127V290Z"/>
          <path d="M785 111V92H837V111M797 92V77H827V92M780 149H842M780 178H842M780 208H842M780 238H842M780 268H842" fill="none"/>
          <path d="M861 290V167H877V105H890V74H944V105H956V167H976V290Z"/>
          <path d="M889 74V56H946V74M900 56V42H934V56M882 186H955M882 212H955M882 238H955M882 264H955" fill="none"/>
          <path d="M900 102V283M915 102V283M930 102V283" fill="none" strokeWidth=".8" opacity=".6"/>
          {/* Sculptural curved tower rather than simple outline. */}
          <path d="M976 290V151Q985 92 1038 53Q1063 115 1063 160V290Z"/>
          <path d="M996 290V154Q1004 111 1035 81M1011 150H1051M1003 177H1059M998 207H1061M991 239H1061M982 267H1061" fill="none"/>
          {/* Glass-front mid-rise and rooftop lounge. */}
          <path d="M1063 290V213H1083V164H1167V194H1195V213H1223V290Z"/>
          <path d="M1083 164V150H1167V164M1102 150V137H1148V150M1080 190H1180M1077 216H1221M1084 244H1210M1084 272H1210" fill="none"/>
          <path d="M1104 176V282M1129 176V282M1154 176V282" fill="none" opacity=".55"/>
          {/* Cluster of elegant terraces tapering toward a quieter residential edge. */}
          <path d="M1223 290V206H1248V186H1283V159H1332V186H1360V226H1389V290Z"/>
          <path d="M1238 228H1379M1247 253H1379M1261 187H1330M1270 208V280M1294 208V280M1318 208V280M1342 226V280" fill="none"/>
          <path d="M1389 290V244H1426V224H1479V205H1514V223H1544V241H1580V290Z"/>
          <path d="M1405 244H1577M1426 224H1544M1448 248V280M1488 237V280M1530 247V280" fill="none"/>
        </g>
        {/* Quiet engraved glazing and architectural grid; not floating dots or a generic waveform. */}
        <g fill="url(#inbs-re-facade-windows)" opacity=".72">
          <path d="M316 178H389V281H316ZM466 127H535V281H466ZM784 138H839V282H784ZM879 172H956V283H879ZM1100 164H1167V280H1100ZM1260 192H1344V283H1260Z"/>
        </g>
        <g className="inbs-footer-skyline-accents" fill="none" stroke="#C7EAFA" strokeWidth="1.25" opacity=".72">
          <path d="M58 249V276M73 249V276M99 249V276M116 249V276M234 263V281M247 263V281"/>
          <path d="M612 194V231M731 194V231M801 149V276M817 149V276M886 184V281M944 184V281"/>
          <path d="M995 156Q1001 126 1023 108M1167 163V280M1278 228V281M1328 228V281"/>
        </g>
        {/* Every building is grounded on the same lower baseline. */}
        <path d="M0 289H1600" stroke="#B6E5FC" strokeWidth="1.6" opacity=".58"/>
      </svg>
    </div>
  );
}
