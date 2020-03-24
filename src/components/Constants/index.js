export const ADMIN_ROLES = ["shangtingli@outlook.com","shangtingli@gmail.com","yenchenc@usc.edu","liuzhife@usc.edu"]
export const STORES_EACH_PAGE = 3;
export const COMMENTS_EACH_PAGE = 4;
export const TRAVELLERS_EACH_PAGE = 2;
export const HOURS_CONSIDERED = 12;
export const CACHE_DURATION_MINUTES= 10;
export const DEFAULT_LATTITUDE = -22.814785;
export const DEFAULT_LONGITUDE = -43.246648;
// export const TRAVEL_PLAN_COOKIE_TOKEN_KEY="travel_plan_cookie_token_key_yuema_application_author_lst";
// export const TRAVEL_PLAN_VALID_DURATION_HOURS = 6;
export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export const COLOR_SCHEMES1 = ['#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704']
export const COLOR_SCHEMES2 = ['#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b']
export const COLOR_SCHEMES3 = ['#c994c7','#df65b0','#e7298a','#ce1256','#980043','#67001f']
export const COLOR_SCHEMES=[];
for(let i=0; i< COLOR_SCHEMES1.length; ++i){
    COLOR_SCHEMES.push(COLOR_SCHEMES1[i]);
    COLOR_SCHEMES.push(COLOR_SCHEMES2[i]);
    COLOR_SCHEMES.push(COLOR_SCHEMES3[i]);
}

export const ALL_CATEGORIES = [
    'Clothing',
    'Shoes',
    'Consumer Electronics',
    'Books',
    'Movies',
    'Cosmetics',
    'Food and Drinks',
    'Sports',
    'Music',
    'Entertaining',
    'DIY',
    'Games',
    'Traveling',
    'Electronics',
    'Furniture',
    'Accessories',
    'Luxury',
    'Economical'
]
export const MAXIMUM_HOBBIES_SELECTED = 20;
export const ALL_IATA = ['ABE',
    'ABI',
    'ABQ',
    'ABY',
    'ACK',
    'ACT',
    'ACV',
    'ACY',
    'ADK',
    'ADQ',
    'AEX',
    'AGS',
    'AKN',
    'ALB',
    'ALO',
    'AMA',
    'ANC',
    'ASE',
    'ATL',
    'ATW',
    'AUS',
    'AVL',
    'AVP',
    'AZO',
    'BDL',
    'BET',
    'BFL',
    'BGM',
    'BGR',
    'BHM',
    'BIL',
    'BIS',
    'BJI',
    'BLI',
    'BMI',
    'BNA',
    'BOI',
    'BOS',
    'BPT',
    'BQK',
    'BQN',
    'BRO',
    'BRW',
    'BTM',
    'BTR',
    'BTV',
    'BUF',
    'BUR',
    'BWI',
    'BZN',
    'CAE',
    'CAK',
    'CDC',
    'CDV',
    'CEC',
    'CHA',
    'CHO',
    'CHS',
    'CIC',
    'CID',
    'CLD',
    'CLE',
    'CLL',
    'CLT',
    'CMH',
    'CMI',
    'CMX',
    'COD',
    'COS',
    'CPR',
    'CRP',
    'CRW',
    'CSG',
    'CVG',
    'CWA',
    'CYS',
    'DAB',
    'DAL',
    'DAY',
    'DBQ',
    'DCA',
    'DEN',
    'DFW',
    'DHN',
    'DLG',
    'DLH',
    'DRO',
    'DSM',
    'DTW',
    'EGE',
    'EKO',
    'ELM',
    'ELP',
    'ERI',
    'EUG',
    'EVV',
    'EWN',
    'EWR',
    'EYW',
    'FAI',
    'FAR',
    'FAT',
    'FAY',
    'FCA',
    'FLG',
    'FLL',
    'FLO',
    'FNT',
    'FSD',
    'FSM',
    'FWA',
    'GCC',
    'GEG',
    'GFK',
    'GGG',
    'GJT',
    'GNV',
    'GPT',
    'GRB',
    'GRK',
    'GRR',
    'GSO',
    'GSP',
    'GST',
    'GTF',
    'GTR',
    'GUC',
    'HDN',
    'HHH',
    'HLN',
    'HNL',
    'HOU',
    'HPN',
    'HRL',
    'HSV',
    'HTS',
    'IAD',
    'IAH',
    'ICT',
    'IDA',
    'ILM',
    'IND',
    'INL',
    'IPL',
    'ISP',
    'ITH',
    'ITO',
    'IYK',
    'JAC',
    'JAN',
    'JAX',
    'JFK',
    'JNU',
    'KOA',
    'KTN',
    'LAN',
    'LAS',
    'LAW',
    'LAX',
    'LBB',
    'LCH',
    'LEX',
    'LFT',
    'LGA',
    'LGB',
    'LIH',
    'LIT',
    'LMT',
    'LNK',
    'LRD',
    'LSE',
    'LWB',
    'LWS',
    'LYH',
    'MAF',
    'MBS',
    'MCI',
    'MCN',
    'MCO',
    'MDT',
    'MDW',
    'MEI',
    'MEM',
    'MFE',
    'MFR',
    'MGM',
    'MHT',
    'MIA',
    'MKE',
    'MKG',
    'MLB',
    'MLI',
    'MLU',
    'MOB',
    'MOD',
    'MOT',
    'MQT',
    'MRY',
    'MSN',
    'MSO',
    'MSP',
    'MSY',
    'MTJ',
    'MYR',
    'OAJ',
    'OAK',
    'OGD',
    'OGG',
    'OKC',
    'OMA',
    'OME',
    'ONT',
    'ORD',
    'ORF',
    'OTH',
    'OTZ',
    'OXR',
    'PBI',
    'PDX',
    'PFN',
    'PHF',
    'PHL',
    'PHX',
    'PIA',
    'PIH',
    'PIR',
    'PIT',
    'PLN',
    'PMD',
    'PNS',
    'PSC',
    'PSE',
    'PSG',
    'PSP',
    'PUB',
    'PVD',
    'PWM',
    'RAP',
    'RDD',
    'RDM',
    'RDU',
    'RFD',
    'RHI',
    'RIC',
    'RKS',
    'RNO',
    'ROA',
    'ROC',
    'ROW',
    'RST',
    'RSW',
    'SAN',
    'SAT',
    'SAV',
    'SBA',
    'SBN',
    'SBP',
    'SCC',
    'SCE',
    'SDF',
    'SEA',
    'SFO',
    'SGF',
    'SGU',
    'SHV',
    'SIT',
    'SJC',
    'SJT',
    'SJU',
    'SLC',
    'SLE',
    'SMF',
    'SMX',
    'SNA',
    'SPI',
    'SPS',
    'SRQ',
    'STL',
    'STT',
    'STX',
    'SUN',
    'SUX',
    'SWF',
    'SYR',
    'TEX',
    'TLH',
    'TOL',
    'TPA',
    'TRI',
    'TUL',
    'TUP',
    'TUS',
    'TVC',
    'TWF',
    'TXK',
    'TYR',
    'TYS',
    'VLD',
    'VPS',
    'WRG',
    'WYS',
    'XNA',
    'YAK',
    'YKM',
    'YUM']
