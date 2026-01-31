const positiveTestCases = [
  { id: 'POS_01', input: 'magee potha dhenna.', expected: 'මගේ පොත දෙන්න.' },
  { id: 'POS_02', input: 'ammaa uyana athara thaaththaa kiyavanna.', expected: 'අම්මා උයන අතර තාත්තා කියවන්න.' },
  { id: 'POS_03', input: 'oyaa paadam karoth viBhaagaya paas veyi', expected: 'ඔයා පාඩම් කරොත් විභාගය පාස් වෙයි' },
  { id: 'POS_04', input: 'oyaata monavadha oonee?', expected: 'ඔයාට මොනවද ඕනේ?' },
  { id: 'POS_05', input: 'potha meese uda thiyanna', expected: 'පොත මේසෙ උඩ තියන්න' },
  { id: 'POS_06', input: 'mama adha paasael enavaa', expected: 'මම අද පාසැල් එනවා' },
  { id: 'POS_07', input: 'eyaa adha vaedata ennee naee', expected: 'එයා අද වැඩට එන්නේ නෑ' },
  { id: 'POS_08', input: 'obata suBha dhavasak!', expected: 'ඔබට සුභ දවසක්!' },
  { id: 'POS_09', input: 'karuNaakara pQQthiya thula nishshabdha venna', expected: 'කරුණාකර පංතිය තුල නිශ්ශබ්ද වෙන්න' },
  { id: 'POS_10', input: 'ooka ayin karalaa dhaanna', expected: 'ඕක අයින් කරලා දාන්න' },
  { id: 'POS_11', input: 'mata dhaen badagini.', expected: 'මට දැන් බඩගිනියි.' },
  { id: 'POS_12', input: 'nidhaa ganna', expected: 'නිදා ගන්න' },
  { id: 'POS_13', input: 'api heta match ekak gahanna yamu.', expected: 'අපි හෙට match එකක් ගහන්න යමු.' },
  { id: 'POS_14', input: 'thava thava', expected: 'තව තව' },
  { id: 'POS_15', input: 'api giya maasee nivaadu giyaa.', expected: 'අපි ගිය මාසේ නිවාඩු ගියා.' },
  { id: 'POS_16', input: 'heta thava siQQdhuvak kiyamu', expected: 'හෙට තව සිංන්දුවක් කියමු' },
  { id: 'POS_17', input: 'mama nivaadu gannavaa.', expected: 'මම නිවාඩු ගන්නවා.' },
  { id: 'POS_18', input: 'magee CS assignment eka PDF ekak vidhiyata LMS ekata upload karanna oonee', expected: 'මගේ CS assignment එක PDF එකක් විදියට LMS එකට upload කරන්න ඕනේ' },
  { id: 'POS_19', input: 'adoo machan, meekee haetiyata meeka patta supiri kaeemakne bQQ.', expected: 'අඩෝ මචන්, මේකේ හැටියට මේක පට්ට සුපිරි කෑමක්නෙ බං.' },
  { id: 'POS_20', input: 'giya sathiye api okkoma ekathu velaa badhulle yanna thiiraNaya karala loku van ekak rent ekata gaththaa. udheetama gamana patan gaththa nisaa paara hariyata nidhahasva thibunaa. kandha udata yanakota siithala vaedi vuNaa. api raththota paaren giye hariyata lassanata thibuna nisaa. meeka magee jiivithe lassanama trip ekak kiyalaa mata hithenavaa. heta aayeth vaedata yanna thiyena nisaa adha ikmanata gedhara yanna oonee.', expected: 'ගිය සතියෙ අපි ඔක්කොම එකතු වෙලා බදුල්ලෙ යන්න තීරණය කරල ලොකු van එකක් rent එකට ගත්තා. උදේටම ගමන පටන් ගත්ත නිසා පාර හරියට නිදහස්ව තිබුනා. කන්ද උඩට යනකොට සීතල වැඩි වුණා. අපි රත්තොට පාරෙන් ගියෙ හරියට ලස්සනට තිබුන නිසා. මේක මගේ ජීවිතෙ ලස්සනම trip එකක් කියලා මට හිතෙනවා. හෙට ආයෙත් වැඩට යන්න තියෙන නිසා අද ඉක්මනට ගෙදර යන්න ඕනේ.' },
  { id: 'POS_21', input: 'mama heta udheema oyaava hamba venna hQQdhiyata ennam.', expected: 'මම හෙට උදේම ඔයාව හම්බ වෙන්න හංදියට එන්නම්.' },
  { id: 'POS_22', input: 'thaaththaa   kadeeta   giyaa.', expected: 'තාත්තා  කඩේට  ගියා.' },
  { id: 'POS_23', input: 'apee yaaluvoo okkoma heta pQQthi yanna enavaa.', expected: 'අපේ යාලුවෝ ඔක්කොම හෙට පංති යන්න එනවා.' }
];


export default positiveTestCases;