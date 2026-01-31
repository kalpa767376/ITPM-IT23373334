const negativeTestCases = [
  { id: 'NEG_01', input: 'mama pdm krnne ntte ai?', notExpected: 'මම පාඩම් කරන්නේ නැත්තෙ ඇයි?' },
  { id: 'NEG_02', input: 'oyaage pessword eka chenge karala ewanna', notExpected: 'ඔයාගෙ password එක change කරල එවන්න' },
  { id: 'NEG_03', input: 'MaMa PaLliyaTa YaNaVa', notExpected: 'මම පල්ලියට යනවා' },
  { id: 'NEG_04', input: 'mama hetakandy yanavaa', notExpected: 'මම හෙට kandy යනවා' },
  { id: 'NEG_05', input: 'apee amma adha pola', notExpected: 'අපේ අම්ම අද පොලට ගිහිල්ල තියනවා.' },
  { id: 'NEG_06', input: 'ada udheetama paasala nivaadu nisaa mama gedra indhan pothak kiyavanna hituvath thaaththaa kivve vaththa suddha karanna', notExpected: 'අද උදේටම පාසල නිවාඩු නිසා මම ගෙදර ඉදන් පොතක් කියවන්න හිතුවත්, තාත්තා කිව්වෙ වත්ත සුද්ද කරන්න උදවු වෙන්න කියල.' },
  { id: 'NEG_07', input: 'amthakalannaepaai heta scl prty thiyenava unth api yamu', notExpected: 'අමතක කරන්න එපා ආයෙත් හෙට ස්කූල් පාටි තියෙන වුණත් අපි යමු' },
  { id: 'NEG_08', input: 'Rs.500/=vatina kilo 10 gamu', notExpected: 'Rs.500/= වටින කිලෝ 10ක් ගමු' },
  { id: 'NEG_09', input: 'magee laptop ekee windows update eka stuck vela thiyennee', notExpected: 'මගේ laptop එකේ windows update එක stuck වෙලා තියෙන්නේ.' },
  { id: 'NEG_10', input: 'mta nidagnna oone', notExpected: 'මට නිදාගන්න ඕනෙ' }
];



export default negativeTestCases;