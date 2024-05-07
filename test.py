import codecs
with codecs.open('m.txt','r',encoding='utf8') as csvfile:
        test = csvfile.read()
# print(test)
i=0
j=0
answ=[]
a=[]
while j<400:
    res=''
    res1=''
    listt=[]
    while test[i]!='•':
        if test[i]=='√':
            break
        res+=test[i]
        i+=1
        
    listt.append(res)
    res=''
    count=0
    i-=2
    while count!=5:
        try:
            res1+=test[i+1:test[i+1:].index('\n')+i]
            i+=test[i+1:].index('\n')+1
            
            if '√' in res1:
                res1=' •'+res1[2:]
                correct=res1
            
            listt.append(res1)
            res1=''
            count+=1
        except  ValueError:
            pass
    listt.append(correct)
    answ.append(listt)
    j+=1
print(answ)