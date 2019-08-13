# brilliantlunchchallenge

* While loading the page, it will show the time stored in an array, each time having a distance of 30px.
* It dynamically creates each event and append the style by calculating it with considering an hour-(60) as lap.
* Appends div inside the eventdiv with name and side color based on the condition.
* Nikkis lunch event is stored in a separte object and calculated other events overlapping with the same. If the overlapping is greater that 30(half an hour) and less that 60 (one hour) this is considered as the matiching one. Else no match.
* Once the matching event has received, it will append appropriate side color div. If no match black color div is attached.
