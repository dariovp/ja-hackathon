import mailchimp from "@mailchimp/mailchimp_marketing";

export default async (req, res) => {

	try{
		const listId = "fb37277973";
		const subscribingUser = {
			email: req.body.email,
			firstName: req.body.name,
		};

		mailchimp.setConfig({
			apiKey: "1fbd9ed7b81fe16d02562c255b8d0b03-us7",
			server: "us7",
		});

		const response = await mailchimp.lists.addListMember(listId, {
			email_address: subscribingUser.email,
			status: "subscribed",
			merge_fields: {
				FNAME: subscribingUser.firstName,
			}
		});

		res.send(response)

		console.log(
			`Successfully added contact as an audience member. The contact's id is ${
				response.id
			}.`
		);
	}

	catch (error){
		console.log("error", error)
		res.send(error)
	}

}